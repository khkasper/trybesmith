import { IProducts, IProductsWithId } from '../interfaces/Products';
import { IIdProducts } from '../interfaces/Orders';
import ProductsModel from '../models/ProductsModel';

const create = async (productsInfo: IProducts): Promise<IProductsWithId> => {
  const product = await ProductsModel.create(productsInfo);
  return product as IProductsWithId;
};

const getAll = async (): Promise<IProductsWithId[]> => {
  const products = await ProductsModel.getAll();
  return products as IProductsWithId[];
};

const update = async ({ id, products }: IIdProducts): Promise<void> => {
  await Promise.all(products.map(async (product) => ProductsModel.update({ id, product })));
};

export default { 
  create,
  getAll,
  update,
};