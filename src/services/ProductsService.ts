import { IProducts, IProductsWithId } from '../interfaces/Products';
import ProductsModel from '../models/ProductsModel';

const create = async (productsInfo: IProducts): Promise<IProductsWithId> => {
  const product = await ProductsModel.create(productsInfo);
  return product as IProductsWithId;
};

export default { create };