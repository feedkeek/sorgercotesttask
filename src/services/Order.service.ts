import { Order } from 'src/entities';
import {
  getConnection,
  InsertResult,
  LessThan,
  MoreThan,
  Repository,
} from 'typeorm';

export class OrderService {
  private orderRepository: Repository<Order>;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() {
    this.orderRepository = getConnection().getRepository(Order);
  }

  public async getAllOrders(filterOptions?: {
    startDate?: number;
    endDate?: number;
    // isVegan?: boolean; not implemented yet
  }): Promise<Order[]> {
    return await this.orderRepository.manager.find(Order, {
      where: [
        { OrderDate: MoreThan(filterOptions.startDate) },
        { OrderDate: LessThan(filterOptions.endDate) },
      ],
    });
  }

  public async createOrder(orderBody: any): Promise<Order> {
    try {
      let newOrder = new Order();
      newOrder = { ...orderBody };
      return await this.orderRepository.save(newOrder);
    } catch (error) {
      throw new Error('Create Order Error');
    }
  }
}

export default new OrderService();
