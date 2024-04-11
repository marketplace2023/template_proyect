import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'sale_return' })
export class SaleReturn {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'sale_order_id', type: 'int' })
  public sale_order_id: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Column({ name: 'quantity', type: 'int' })
  public quantity: number;

  @Column({ name: 'reason', type: 'varchar' })
  public reason: string;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'marketplace_shop_id', type: 'int' })
  public marketplace_shop_id: number;

  @Column({ name: 'return_date', type: 'date' })
  public return_date: Date;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SaleReturn>) {
    Object.assign(this, data);
  }
}
