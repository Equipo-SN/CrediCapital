import jwt from 'jsonwebtoken';

 function generateToken(id: string): string {
    const payload = { id };
    const options = { expiresIn: '1h' };
    return jwt.sign(payload, process.env.TOKEN_SECRET || 'unapalabrasecreta', options);
  }
  export default generateToken;