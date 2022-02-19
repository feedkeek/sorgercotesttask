import { Router } from 'express';
import { OrderService } from 'src/services';

const orderRouter = Router();

orderRouter.get('/', async (req, res) => {
  try {
    const orders = await OrderService.getAllOrders(req.query);
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send('Something went wrong while getting orders');
  }
});

orderRouter.post('/', async (req, res) => {
  try {
    const order = await OrderService.createOrder(req.body);
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send('Something went wrong while creating order');
  }
});

export default orderRouter;
