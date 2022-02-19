import { Router } from 'express';
import orderRouter from './order.routes';
import productsRouter from './products.router';

const mainRouter = Router();

mainRouter.use('/products', productsRouter);
mainRouter.use('/order', orderRouter);

export default mainRouter;
