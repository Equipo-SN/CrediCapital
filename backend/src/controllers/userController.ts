import { Request, Response} from "express";
import { User } from "../entities/Userentities";
import generateToken from "../helpers/generateJWT";




const createUser = async (req:Request,res:Response) =>{
    const {firsName, lastName, phone,RFC, email, password} = req.body;

    const userMatch = await User.findOne({where:{email}});

  if (userMatch) {
    const error = new Error("An account is already associated with that email");
    return res.status(400).json({ msg: error.message });
  }
    try {
        const user = new User();
        const hashedPassword = await user.hashPassword(password);
            user.firstName = firsName;
            user.lastName = lastName;
            user.phone = phone;
            user.RFC = RFC;
            user.email = email;
            user.password = hashedPassword ;
            user.token = Date.now().toString(32) + Math.random().toString(32).substring(2)
            
        await user.save()
        res.send({msg:'Account was created, please check your email to activate'});
        
    } catch (error) {
        res.send(error);
        
    }
}
const confirmAccount = async (req: Request,res: Response) =>{
    const {token} = req.params;
    const confirmado = await User.findOne({where:{token}});

  if (!confirmado) {
    const error = new Error("token not fount");
    return res.status(400).json({ msg: error.message });
  }
  try {
    confirmado.token = '';
    confirmado.active = true;
    await confirmado.save();
    res.json({ msg: "Account confirmed" });
  } catch (err) {
    console.log(err);
  }
}
const login =  async (req:Request,res:Response) =>{
    const {email,password} = req.body;
    const validUser = await User.findOne({where:{email}})
    // Aca comprobamos si el usuario esta registrado o no
    if (!validUser) {
      const error = new Error("User does not exist");
      return res.status(403).json({ msg: error.message });
    }
    // comprobar si el usuario confirmo la cuenta
    if(!validUser?.active){
      const error = new Error('Please check your email to validate the account');
        return res.status(403).json({ msg: error.message });
    }
    try {
      // revisar si la contraseña es correcta
      const passwordsMatch = await validUser.comparePassword(password);    
     if ( passwordsMatch) {
      //generamos el JWT  
      res.json({token:generateToken(validUser.id)});
      
     }
    } catch (error) {
      console.log(error);
    }   
}
const admin = (req:Request,res:Response)=>{
  console.log('desde admin');
  
}

export {
    createUser,
    confirmAccount,
    login,
    admin
}