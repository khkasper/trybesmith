import { Request, Response, NextFunction } from 'express';
import verifyToken from '../utils/verifyToken';
import StatusCodes from '../enums/StatusCodes';
import StatusMessages from '../enums/StatusMessages';

const authValidations = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ error: StatusMessages.tokenNotFound });
  }

  const verifiedToken = verifyToken(authorization);

  if (!verifiedToken) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ error: StatusMessages.invalidToken });
  }

  return next();
};

export default authValidations;