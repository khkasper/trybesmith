import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProducts, IProductsWithId } from '../interfaces/Products';
import { IIdProduct } from '../interfaces/Orders';

const create = async (productInfo: IProducts): Promise<IProductsWithId> => {
  const { name, amount } = productInfo;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId: id } = result;
  const product: IProductsWithId = { item: { id, name, amount } };
  return product as IProductsWithId;
};

const getAll = async (): Promise<IProductsWithId[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute(query);
  return products as IProductsWithId[];
};

const update = async ({ id, product }: IIdProduct): Promise<void> => {
  const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
  await connection.execute<ResultSetHeader>(query, [id, product]);
};

export default {
  create,
  getAll,
  update,
};