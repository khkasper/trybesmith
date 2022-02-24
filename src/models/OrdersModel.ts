import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUserIdProducts, IIdOrdersOrder } from '../interfaces/Orders';

const create = async (userIdProducts: IUserIdProducts): Promise<IIdOrdersOrder> => {
  const { userId, products } = userIdProducts;
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [userId]);
  const { insertId: id } = result;
  const payload = { order: { userId, products } };
  const orders = { id, orders: payload };
  return orders;
};

export default {
  create,
};