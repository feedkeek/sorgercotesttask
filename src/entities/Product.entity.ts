import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('increment')
  ProductId: number;

  @Column('varchar', { length: 50, unique: true })
  ProductName: string;

  @Column('decimal', { precision: 2 })
  UnitPrice: number;

  @Column('bit')
  IsVegan: boolean;
}
