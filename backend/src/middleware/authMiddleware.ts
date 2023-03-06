import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";
import { User } from "../entities/Userentities";
const checkAuth = async (req:Request, res:Response, next:NextFunction) =>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
       try {
        token = req.headers.authorization.split(" ")[1];
        const decoded: any = jwt.verify(token,process.env.TOKEN_SECRET ||'uanpalabrasecreta ')
        const user = await User.find({select:['id','firstName','lastName','phone','email'] ,where:{id:decoded.id}})
        req.usersesion = user;
        
        
          } catch (err) {
            console.error(err);
          }          
    }else{
            console.log('token invalido');
            
    }
    
    next();
}
export default checkAuth;

