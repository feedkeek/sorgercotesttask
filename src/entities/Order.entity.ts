import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './Customer.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('increment')
  OrderId: number;

  @Column('varchar', { length: 10, nullable: true, unique: true })
  OrderNumber?: string;

  @Column('timestamp', { default: Date.now() })
  OrderDate: number;

  @Column('decimal', { precision: 2 })
  TotalAmount: number;

  @OneToOne(() => Customer, (customer) => customer.CustomerId)
  @JoinColumn([
    {
      name: 'FK_Order_CustomerId_Customer',
      referencedColumnName: 'CustomerId',
    },
  ])
  Customer: Customer;
}
