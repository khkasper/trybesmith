import { IUser, IUserWithId } from '../interfaces/User';
import UserModel from '../models/UserModel';

const create = async (userInfo: IUser): Promise<IUserWithId> => {
  const user = await UserModel.create(userInfo);
  return user as IUserWithId;
};

export default {
  create,
};