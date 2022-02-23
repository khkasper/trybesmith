import { verify } from 'jsonwebtoken';

const JWT_SECRET = 'JWT_SECRET';

const verifyToken = (token: string) => verify(token, JWT_SECRET);

export default verifyToken;