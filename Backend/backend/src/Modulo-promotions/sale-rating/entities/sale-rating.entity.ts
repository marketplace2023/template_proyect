import { StockPicking } from 'src/Modulo-store/stock-picking/entities/stock-picking.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'sale_rating' })
export class SaleRating {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'customer_id', type: 'int' })
  public customer_id: number;

  @Column({ name: 'seller_id', type: 'int' })
  public seller_id: number;

  @Column({ name: 'marketplace_shop_id', type: 'int' })
  public marketplace_shop_id: number;

  @Column({ name: 'rating', type: 'int' })
  public rating: number;

  @Column({ name: 'review', type: 'varchar' })
  public review: string;

  //relaciones de tienda
  @Column({ name: 'stockpline_id', type: 'int' })
  public stockpline_id: number;

  @ManyToOne(() => StockPicking, (stockPicking) => stockPicking.saleRatings)
  @JoinColumn({ name: 'stockpline_id' })
  public stockPickings: StockPicking;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SaleRating>) {
    Object.assign(this, data);
  }
}
