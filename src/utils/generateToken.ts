import { sign, SignOptions } from 'jsonwebtoken';
import { IUserToken } from '../interfaces/User';

const JWT_SECRET = 'JWT_SECRET';

const jwtConfig: SignOptions = { expiresIn: '7d', algorithm: 'HS256' };

const generateToken = (data: IUserToken) => sign(data, JWT_SECRET, jwtConfig);

export default generateToken;