import { Request, Response } from 'express';
import { IProducts, IProductsWithId } from '../interfaces/Products';
import StatusCodes from '../enums/StatusCodes';
import ProductsService from '../services/ProductsService';

const create = async (req: Request, res: Response): Promise<Response> => {
  const productInfo: IProducts = req.body;
  const product: IProductsWithId = await ProductsService.create(productInfo);
  return res.status(StatusCodes.CREATED).json(product);
};

const getAll = async (_req: Request, res: Response) => {
  const products: IProductsWithId[] = await ProductsService.getAll();
  return res.status(StatusCodes.OK).json(products);
};

export default {
  create,
  getAll,
};