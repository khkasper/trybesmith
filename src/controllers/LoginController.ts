import { Request, Response } from 'express';
import StatusCodes from '../enums/StatusCodes';
import LoginService from '../services/LoginService';
import generateToken from '../utils/generateToken';

const getUser = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  const user = await LoginService.getUser({ username, password });
  const token = generateToken({ id: user.id, username });
  return res.status(StatusCodes.OK).json({ token }) as Response;
};

export default { getUser };