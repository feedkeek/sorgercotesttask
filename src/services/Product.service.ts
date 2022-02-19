import { Product } from 'src/entities';
import { getConnection, Repository } from 'typeorm';

export class ProductService {
  private productRepository: Repository<Product>;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() {
    this.productRepository = getConnection().getRepository(Product);
  }
  public async getAll(): Promise<Product[]> {
    return await this.productRepository.find({
      select: ['ProductName', 'UnitPrice', 'IsVegan'],
    });
  }

  public async getOne(productId: number): Promise<Product> {
    return await this.productRepository.findOne(productId, {
      select: ['ProductName', 'UnitPrice', 'IsVegan'],
    });
  }
}

export default new ProductService();
