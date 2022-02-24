import express from 'express';
import userRouter from './routes/UserRouter';
import loginRouter from './routes/LoginRouter';
import productsRouter from './routes/ProductsRouter';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/products', productsRouter);

export default app;
