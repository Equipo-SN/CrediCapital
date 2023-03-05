import { Request, Response} from "express"
import bcrypt from 'bcrypt';


import { User } from "../entities/Userentities";



const createUser = async (req:Request,res:Response) =>{
    const {firsName, lastName, phone, email, password} = req.body;

    const existeUsuario = await User.findOne({where:{email}});

  if (existeUsuario) {
    const error = new Error("Ya existe una cuenta asociada con ese email");
    return res.status(400).json({ msg: error.message });
  }
    try {
        const user = new User();
            user.firstName = firsName;
            user.lastName = lastName;
            user.phone = phone;
            user.email = email;
            user.password = password;
            user.token = Date.now().toString(32) + Math.random().toString(32).substring(2)
            
        await user.save()
        res.send({msg:'La cuenta fue creada revise su email para activar'});
        
    } catch (error) {
        res.send(error);
        
    }
}
const confirmAccount = async (req: Request,res: Response) =>{
    const {token} = req.params;
    const confirmado = await User.findOne({where:{token}});

  if (!confirmado) {
    const error = new Error("token no encontrado");
    return res.status(400).json({ msg: error.message });
  }
  try {
    confirmado.token = '';
    confirmado.active = true;
    await confirmado.save();
    res.json({ msg: "Cuenta confirmada" });
  } catch (err) {
    console.log(err);
  }
}
const login =  async (req:Request,res:Response) =>{
    const {email,password} = req.body;
    
    const validUser = await User.findOne({where:{email}})
    // comprobar si el usuario confirmo la cuenta
    if(!validUser?.active){
        const error = new Error('Revisa su correo para validar la cuenta')
        return res.status(403).json({ msg: error.message });
    }
    // revisar si la contraseña es correcta
    const passwordsMatch = await bcrypt.compare(password, validUser.password);
    console.log(passwordsMatch);
    
    
    
}

export {
    createUser,
    confirmAccount,
    login
}