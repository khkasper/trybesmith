import OrdersModel from '../models/OrdersModel';
import { IUserIdProducts, IIdOrdersOrder } from '../interfaces/Orders';

const create = async (userIdProducts: IUserIdProducts): Promise<IIdOrdersOrder> => {
  const orders = await OrdersModel.create(userIdProducts);
  return orders;
};

export default {
  create,
};