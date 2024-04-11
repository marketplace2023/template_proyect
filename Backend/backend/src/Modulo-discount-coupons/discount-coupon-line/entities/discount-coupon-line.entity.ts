import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'discount_coupon_line' })
export class DiscountCouponLine {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'discount_coupon_id', type: 'int' })
  public discount_coupon_id: number;

  @Column({ name: 'discount_rule_id', type: 'int' })
  public discount_rule_id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<DiscountCouponLine>) {
    Object.assign(this, data);
  }
}
