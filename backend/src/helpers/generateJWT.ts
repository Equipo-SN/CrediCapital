import jwt from "jsonwebtoken"; 


export function generateToken(id: string): string { 
    return jwt.sign({id}, process.env.TOKEN_SECRET ||'uanpalabrasecreta');
  }

export default generateToken;