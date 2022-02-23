import connection from './connection';
import { IUserLogin, IUserWithId } from '../interfaces/User';

const getUser = async (userInfo: IUserLogin): Promise<IUserWithId> => {
  const { username, password } = userInfo;
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
  const [result] = await connection.execute(query, [username, password]);
  const [user] = result as IUserWithId[];
  return user;
};

export default { getUser };