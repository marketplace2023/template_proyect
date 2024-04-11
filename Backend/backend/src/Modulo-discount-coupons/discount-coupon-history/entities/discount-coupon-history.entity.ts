import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'discount_coupon_history' })
export class DiscountCouponHistory {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'discount_coupon_id', type: 'int' })
  public discount_coupon_id: number;

  @Column({ name: 'date', type: 'date' })
  public date: Date;

  @Column({ name: 'order_id', type: 'int' })
  public order_id: number;

  @Column({ name: 'amount_discount', type: 'int' })
  public amount_discount: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<DiscountCouponHistory>) {
    Object.assign(this, data);
  }
}
