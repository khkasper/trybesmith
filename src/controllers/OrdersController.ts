import { Request, Response } from 'express';
import StatusCodes from '../enums/StatusCodes';
import OrdersService from '../services/OrdersService';
import ProductsService from '../services/ProductsService';

const create = async (req: Request, res: Response) => {
  const { products, userId } = req.body;
  const { id, orders } = await OrdersService.create({ userId, products });
  await ProductsService.update({ id, products });
  return res.status(StatusCodes.CREATED).json(orders);
};

export default {
  create,
};