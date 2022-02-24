import { verify } from 'jsonwebtoken';
import { IUserToken } from '../interfaces/User';

const JWT_SECRET = 'JWT_SECRET';

const verifyToken = (token: string) => {
  try {
    const verifiedToken: IUserToken = verify(token, JWT_SECRET) as IUserToken;
    return verifiedToken;
  } catch (error) {
    return undefined;
  }
};

export default verifyToken;