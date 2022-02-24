import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProducts, IProductsWithId } from '../interfaces/Products';

const create = async (productInfo: IProducts): Promise<IProductsWithId> => {
  const { name, amount } = productInfo;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId: id } = result;
  const product: IProductsWithId = { item: { id, name, amount } };
  return product as IProductsWithId;
};

export default { create };