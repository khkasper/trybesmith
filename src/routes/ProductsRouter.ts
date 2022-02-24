import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import { validateName, validateAmount } from '../middlewares/productsValidations';

const productsRouter = Router();

productsRouter.post(
  '/',
  validateName,
  validateAmount,
  ProductsController.create,
);

productsRouter.get(
  '/',
  ProductsController.getAll,
);

export default productsRouter;