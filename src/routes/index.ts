import { Router } from 'express';
import orderItemRouter from './order-item.routes';
import orderRouter from './order.routes';
import productsRouter from './products.router';

const mainRouter = Router();

mainRouter.use('/products', productsRouter);
mainRouter.use('/order', orderRouter);
mainRouter.use('/order-item', orderItemRouter);

export default mainRouter;
