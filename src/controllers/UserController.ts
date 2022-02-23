import { Request, Response } from 'express';
import { IUser, IUserWithId, IUserToken } from '../interfaces/User';
import StatusCodes from '../enums/StatusCodes';
import UserService from '../services/UserService';
import generateToken from '../utils/generateToken';

const create = async (req: Request, res: Response) => {
  const userInfo: IUser = req.body;
  const user: IUserWithId = await UserService.create(userInfo);
  const newUser: IUserToken = { id: user.id, username: user.username };
  const token: string = generateToken(newUser);
  return res.status(StatusCodes.CREATED).json({ token });
};

export default { create };