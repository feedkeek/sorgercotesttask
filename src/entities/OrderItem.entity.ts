import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './Order.entity';
import { Product } from './Product.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn('identity')
  OrderId: number;

  @PrimaryGeneratedColumn('identity')
  ProductId: number;

  @Column('decimal', { precision: 2 })
  UnitPrice: number;

  @Column('int')
  Quantity: number;

  @ManyToOne(() => Order, (order) => order.OrderId)
  @JoinColumn([
    { name: 'FK_OrderItem_OrderId_Order', referencedColumnName: 'OrderId' },
  ])
  order: number;

  @ManyToOne(() => Product, (product) => product.ProductId)
  @JoinColumn([
    {
      name: 'FK_OrderItem_ProductId_Product',
      referencedColumnName: 'ProductId',
    },
  ])
  product: number;
}
