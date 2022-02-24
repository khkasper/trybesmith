import { Request, Response } from 'express';
import { IProducts, IProductsWithId } from '../interfaces/Products';
import StatusCodes from '../enums/StatusCodes';
import {
  create as ProductsCreate,
  getAll as ProductsGetAll,
} from '../services/ProductsService';

export const create = async (req: Request, res: Response) => {
  const productInfo: IProducts = req.body;
  const product: IProductsWithId = await ProductsCreate(productInfo);
  return res.status(StatusCodes.CREATED).json(product);
};

export const getAll = async (_req: Request, res: Response) => {
  const products = await ProductsGetAll();
  return res.status(StatusCodes.OK).json(products);
};
