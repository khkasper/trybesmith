import OrdersModel from '../models/OrdersModel';
import { IUserProducts, IIdOrdersOrder } from '../interfaces/Orders';

const create = async ({ userId, products }: IUserProducts): Promise<IIdOrdersOrder> => {
  const id = await OrdersModel.create(userId);
  const orders = { id, orders: { order: { userId, products } } };
  return orders;
};

export default {
  create,
};