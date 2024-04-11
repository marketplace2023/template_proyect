import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'discount_coupon' })
export class DiscountCoupon {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'code', type: 'int' })
  public code: number;

  @Column({ name: 'type', type: 'int' })
  public type: number;

  @Column({ name: 'value', type: 'int' })
  public value: number;

  @Column({ name: 'start_date', type: 'date' })
  public start_date: Date;

  @Column({ name: 'end_date', type: 'date' })
  public end_date: Date;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<DiscountCoupon>) {
    Object.assign(this, data);
  }
}
