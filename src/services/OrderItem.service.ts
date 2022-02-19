import { OrderItem } from 'src/entities';
import { getConnection, Repository } from 'typeorm';

export class OrderItemService {
  private orderItemRepository: Repository<OrderItem>;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() {
    this.orderItemRepository = getConnection().getRepository(OrderItem);
  }

  public async createOrderItem(body: any): Promise<OrderItem> {
    try {
      let newItem = new OrderItem();
      newItem = { ...body };
      return await this.orderItemRepository.save(newItem);
    } catch (error) {
      throw Error('Something went wrong while creating order item');
    }
  }
}

export default new OrderItemService();
