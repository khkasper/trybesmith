import { Request, Response, NextFunction } from 'express';
import StatusCodes from '../enums/StatusCodes';
import StatusMessages from '../enums/StatusMessages';

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (name === undefined) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: StatusMessages.nameRequired });
  }

  if (typeof name !== 'string') {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: StatusMessages.nameString });
  } 

  if (name.length < 3) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: StatusMessages.nameLength });
  }

  return next();
};

const validateAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;

  if (amount === undefined) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: StatusMessages.amountRequired });
  }

  if (typeof amount !== 'string') {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: StatusMessages.amountString });
  } 

  if (amount.length < 3) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: StatusMessages.amountLength });
  }

  return next();
};

export {
  validateName,
  validateAmount,
};