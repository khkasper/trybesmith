import { verify } from 'jsonwebtoken';

const JWT_SECRET = 'JWT_SECRET';

const verifyToken = (token: string) => {
  try {
    const verifiedToken = verify(token, JWT_SECRET);
    return verifiedToken;
  } catch (error) {
    return undefined;
  }
};

export default verifyToken;