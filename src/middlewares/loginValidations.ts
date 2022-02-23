import { Request, Response, NextFunction } from 'express';
import StatusCodes from '../enums/StatusCodes';
import StatusMessages from '../enums/StatusMessages';
import LoginModel from '../models/LoginModel';

const validateUserAndPass = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (username === undefined) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: StatusMessages.usernameRequired });
  }

  if (password === undefined) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: StatusMessages.passwordRequired });
  }

  const validUserAndPass = await LoginModel.getUser({ username, password });

  if (!validUserAndPass) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: StatusMessages.nameOrPasswordInvalid });
  }

  return next();
};

export default validateUserAndPass;