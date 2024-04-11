import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'sale_coupon_history' })
export class SaleCouponHistory {
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

  @Column({ name: 'description', type: 'int' })
  public description: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SaleCouponHistory>) {
    Object.assign(this, data);
  }
}
