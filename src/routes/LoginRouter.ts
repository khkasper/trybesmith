import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import validateUserAndPass from '../middlewares/loginValidations';

const userRouter = Router();

userRouter.post(
  '/',
  validateUserAndPass,
  LoginController.getUser,
);

export default userRouter;