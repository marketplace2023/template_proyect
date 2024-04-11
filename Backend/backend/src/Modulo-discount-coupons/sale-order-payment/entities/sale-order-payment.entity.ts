import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'sale_order_payment' })
export class SaleOrderPayment {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'order_id', type: 'int' })
  public order_id: number;

  @Column({ name: 'payment_method', type: 'int' })
  public payment_method: number;

  @Column({ name: 'payment_date', type: 'date' })
  public payment_date: Date;

  @Column({ name: 'amount', type: 'float' })
  public amount: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SaleOrderPayment>) {
    Object.assign(this, data);
  }
}
