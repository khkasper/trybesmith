import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const create = async (userId: number): Promise<number> => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [userId]);
  const { insertId: id } = result;
  return id;
};

export default {
  create,
};