import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'sale_coupon_rule' })
export class SaleCouponRule {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'condition_type', type: 'int' })
  public condition_type: number;

  @Column({ name: 'condition_value', type: 'float' })
  public condition_value: number;

  @Column({ name: 'discount_type', type: 'int' })
  public discount_type: number;

  @Column({ name: 'discount_value', type: 'float' })
  public discount_value: number;

  @Column({ name: 'discount_apply_on', type: 'varchar' })
  public discount_apply_on: string;

  @Column({ name: 'product_ids', type: 'int' })
  public product_ids: number;

  @Column({ name: 'category_ids', type: 'int' })
  public category_ids: number;

  @Column({ name: 'date_from', type: 'date' })
  public date_from: Date;

  @Column({ name: 'date_to', type: 'date' })
  public date_to: Date;

  @Column({ name: 'usage_limit', type: 'int' })
  public usage_limit: number;

  @Column({ name: 'usage_limit_per_user', type: 'int' })
  public usage_limit_per_user: number;

  @Column({ name: 'active_users_count', type: 'int' })
  public active_users_count: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SaleCouponRule>) {
    Object.assign(this, data);
  }
}
