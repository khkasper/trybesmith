import { IUserLogin, IUserWithId } from '../interfaces/User';
import LoginModel from '../models/LoginModel';

const getUser = async (userInfo: IUserLogin): Promise<IUserWithId> => {
  const user = await LoginModel.getUser(userInfo);
  return user as IUserWithId;
};

export default { getUser };