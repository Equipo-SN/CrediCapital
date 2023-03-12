import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { User } from '../entities/Userentities';
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

// Función middleware para validar el token JWT
const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  // Verificar si se proporcionó un token JWT en el encabezado Authorization
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: 'No authentication token provided' });
  }
  
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).send({ message: 'No authentication token provided' });
  }
  
  // Verificar el token JWT y extraer el ID del usuario
 const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
 const user: any = await User.find({select:['id','firstName','lastName','phone','email'] ,where:{id:decoded.id}})
 
    
    // Establecer el ID del usuario en la solicitud para su posterior uso
    req.userId = user;
    
    // Continuar con la siguiente función middleware
    next();
}
export default checkAuth;
