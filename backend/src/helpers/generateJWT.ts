import jwt from 'jsonwebtoken';


// Función helper para generar un token JWT
export const generateToken = (id: any) => {
  return jwt.sign({id}, process.env.JWT_SECRET as string, { expiresIn: '1h' });
};

  export default generateToken;