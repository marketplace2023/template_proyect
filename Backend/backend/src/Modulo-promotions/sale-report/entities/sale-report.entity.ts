import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'sale_report' })
export class SaleReport {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'marketplace_shop_id', type: 'int' })
  public marketplace_shop_id: number;

  @Column({ name: 'start_date', type: 'date' })
  public start_date: Date;

  @Column({ name: 'end_date', type: 'date' })
  public end_date: Date;

  @Column({ name: 'total_orders', type: 'int' })
  public total_orders: number;

  @Column({ name: 'total_products', type: 'int' })
  public total_products: number;

  @Column({ name: 'total_amount', type: 'int' })
  public total_amount: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SaleReport>) {
    Object.assign(this, data);
  }
}
