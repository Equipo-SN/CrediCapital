import { Request, Response} from "express"
import { User } from "../entities/Userentities";

const createUser = async (req:Request,res:Response) =>{
    const {firsName, lastName, phone, email, password} = req.body;
    try {
        const user = new User();
        user.firstName = firsName;
        user.lastName = lastName;
        user.phone = phone;
        user.email = email;
        user.password = password;
        await user.save()
        res.send(user);
        console.log(user);
        
    } catch (error) {
        console.log(error);
        
    }
}

export {
    createUser
}