import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import authValidation from '../middlewares/authValidation';
import { validateName, validateAmount } from '../middlewares/productsValidations';

const productsRouter = Router();

productsRouter.post(
  '/',
  authValidation,
  validateName,
  validateAmount,
  ProductsController.create,
);

export default productsRouter;