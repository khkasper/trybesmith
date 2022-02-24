import { Request, Response } from 'express';
import { IProducts, IProductsWithId } from '../interfaces/Products';
import StatusCodes from '../enums/StatusCodes';
import ProductsService from '../services/ProductsService';

const create = async (req: Request, res: Response) => {
  const productInfo: IProducts = req.body;
  const product: IProductsWithId = await ProductsService.create(productInfo);
  return res.status(StatusCodes.CREATED).json(product);
};

export default { create };