import express from 'express';
import userRouter from './routes/UserRouter';
import loginRouter from './routes/LoginRouter';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);

export default app;
