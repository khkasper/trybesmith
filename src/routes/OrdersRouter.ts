import { Router } from 'express';
import validateProducts from '../middlewares/ordersValidations';
import OrdersController from '../controllers/OrdersController';

const ordersRouter = Router();

ordersRouter.post(
  '/',
  validateProducts,
  OrdersController.create,
);

export default ordersRouter;