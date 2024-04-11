import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'sale_coupon_report' })
export class SaleCouponReport {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'coupon_id', type: 'int' })
  public coupon_id: number;

  @Column({ name: 'order_id', type: 'int' })
  public order_id: number;

  @Column({ name: 'customer_id', type: 'int' })
  public customer_id: number;

  @Column({ name: 'date_used', type: 'date' })
  public date_used: Date;

  @Column({ name: 'amount_discounted', type: 'float' })
  public amount_discounted: number;

  @Column({ name: 'is_valid', type: 'tinyint' })
  public is_valid: boolean;

  @Column({ name: 'product_ids', type: 'int' })
  public product_ids: number;

  @Column({ name: 'category_ids', type: 'int' })
  public category_ids: number;

  @Column({ name: 'total_order_amount', type: 'float' })
  public total_order_amount: number;

  @Column({ name: 'discounted_order_amount', type: 'float' })
  public discounted_order_amount: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SaleCouponReport>) {
    Object.assign(this, data);
  }
}
