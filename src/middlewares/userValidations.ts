import { Request, Response, NextFunction } from 'express';
import StatusCodes from '../enums/StatusCodes';
import StatusMessages from '../enums/StatusMessages';

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;

  if (username === undefined) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: StatusMessages.usernameRequired });
  }

  if (typeof username !== 'string') {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: StatusMessages.usernameString });
  } 

  if (username.length <= 2) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: StatusMessages.usernameLength });
  }

  return next();
};

const validateClass = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;

  if (classe === undefined) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: StatusMessages.classeRequired });
  }

  if (typeof classe !== 'string') {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: StatusMessages.classeString });
  } 

  if (classe.length <= 2) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: StatusMessages.classeLength });
  }

  return next();
};

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;

  if (level === undefined) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: StatusMessages.levelRequired });
  }

  if (typeof level !== 'number') {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: StatusMessages.levelNumber });
  } 

  if (level <= 0) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: StatusMessages.levelSize });
  }

  return next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (password === undefined) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: StatusMessages.passwordRequired });
  }

  if (typeof password !== 'string') {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: StatusMessages.passwordString });
  } 

  if (password.length <= 7) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: StatusMessages.passwordLength });
  }

  return next();
};

export { 
  validateUsername,
  validateClass,
  validateLevel,
  validatePassword,
};