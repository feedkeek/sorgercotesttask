import { Router } from 'express';
import { OrderItemService } from 'src/services';

const orderItemRouter = Router();

orderItemRouter.post('/', async (req, res) => {
  try {
    const savedOrderItem = await OrderItemService.createOrderItem(req.body);
    res.status(200).send(savedOrderItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default orderItemRouter;
