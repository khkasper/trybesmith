import { IProducts, IProductsWithId } from '../interfaces/Products';
import {
  create as ProductsCreate,
  getAll as ProductsGetAll,
} from '../models/ProductsModel';

export const create = async (productsInfo: IProducts): Promise<IProductsWithId> => {
  const product = await ProductsCreate(productsInfo);
  return product as IProductsWithId;
};

export const getAll = async (): Promise<IProductsWithId[]> => {
  const products = await ProductsGetAll();
  return products as IProductsWithId[];
};
