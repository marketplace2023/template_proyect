import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'coupon_code' })
export class CouponCode {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'discount_coupon_id', type: 'int' })
  public discount_coupon_id: number;

  @Column({ name: 'status', type: 'varchar' })
  public status: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<CouponCode>) {
    Object.assign(this, data);
  }
}
