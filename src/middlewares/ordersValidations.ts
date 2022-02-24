import { Request, Response, NextFunction } from 'express';
import StatusCodes from '../enums/StatusCodes';
import StatusMessages from '../enums/StatusMessages';

const validateProducts = async (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;

  if (!products) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: StatusMessages.productsRequired });
  }

  if (!Array.isArray(products)) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: StatusMessages.productsArray });
  }

  if (!products.length) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: StatusMessages.productsEmpty });
  }

  return next();
};

export default validateProducts;