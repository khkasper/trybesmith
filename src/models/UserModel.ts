import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser, IUserWithId } from '../interfaces/User';

const create = async (userInfo: IUser): Promise<IUserWithId> => {
  const { username, classe, level, password } = userInfo;
  const query = `
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);
  const { insertId: id } = result;
  const insertedUser: IUserWithId = { id, username, classe, level, password };
  return insertedUser as IUserWithId;
};

export default { create };