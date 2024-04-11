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

@Entity({ name: 'sale_commission' })
export class SaleCommission {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'marketplace_shop_id', type: 'varchar' })
  public marketplace_shop_id: string;

  @Column({ name: 'product_ids', type: 'int' })
  public product_ids: number;

  @Column({ name: 'seller_ids', type: 'int' })
  public seller_ids: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'percentage', type: 'int' })
  public percentage: number;

  @Column({ name: 'fixed_amount', type: 'int' })
  public fixed_amount: number;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  //relaciones de tienda
  @Column({ name: 'stockpline_id', type: 'int' })
  public stockpline_id: number;

  @ManyToOne(() => StockPicking, (stockPicking) => stockPicking.saleCommissions)
  @JoinColumn({ name: 'stockpline_id' })
  public stockPickings: StockPicking;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SaleCommission>) {
    Object.assign(this, data);
  }
}
