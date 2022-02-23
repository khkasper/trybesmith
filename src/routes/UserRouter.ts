import { Router } from 'express';
import UserController from '../controllers/UserController';
import {
  validateClass,
  validateLevel,
  validatePassword,
  validateUsername,
} from '../middlewares/userValidations';

const userRouter = Router();

userRouter.post(
  '/',
  validateClass,
  validateLevel,
  validatePassword,
  validateUsername,
  UserController.create,
);

export default userRouter;