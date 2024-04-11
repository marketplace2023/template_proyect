import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'account_payment_term_line' })
export class AccountPaymentTermLine {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'months', type: 'int' })
  public months: number;

  @Column({ name: 'days', type: 'int' })
  public days: number;

  @Column({ name: 'days_after', type: 'int' })
  public days_after: number;

  @Column({ name: 'discount_days', type: 'int' })
  public discount_days: number;

  @Column({ name: 'payment_id', type: 'int' })
  public payment_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'value', type: 'varchar' })
  public value: string;

  @Column({ name: 'value_amount', type: 'int' })
  public value_amount: number;

  @Column({ name: 'end_month', type: 'tinyint' })
  public end_month: boolean;

  @Column({ name: 'discount_percentage', type: 'int' })
  public discount_percentage: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountPaymentTermLine>) {
    Object.assign(this, data);
  }
}
