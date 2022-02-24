import express from 'express';
import authValidations from './middlewares/authValidations';
import userRouter from './routes/UserRouter';
import loginRouter from './routes/LoginRouter';
import productsRouter from './routes/ProductsRouter';
import ordersRouter from './routes/OrdersRouter';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use(authValidations);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

export default app;