import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('increment')
  CustomerId: number;

  @Column('varchar', { length: 40 })
  CustomerName: string;

  @Column('varchar', { length: 20, nullable: true })
  Phone?: string;
}
