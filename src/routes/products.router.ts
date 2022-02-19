import { Router } from 'express';
import { ProductService } from 'src/services';

const productsRouter = Router();

productsRouter.get('/', async (req, res) => {
  const products = await ProductService.getAll();
  res.status(200).send(products);
});

productsRouter.get('/:productId', async (req, res) => {
  const product = await ProductService.getOne(parseInt(req.params.productId));
  res.status(200).send(product);
});

export default productsRouter;
