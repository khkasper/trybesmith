import { Router } from 'express';
import {
  create as ProductsCreate,
  getAll as ProductsGetAll,
} from '../controllers/ProductsController';
import { validateName, validateAmount } from '../middlewares/productsValidations';

const productsRouter = Router();

productsRouter.post(
  '/',
  validateName,
  validateAmount,
  ProductsCreate,
);

productsRouter.get(
  '/',
  ProductsGetAll,
);

export default productsRouter;