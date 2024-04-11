import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'sale_advance_payment_inv' })
export class SaleAdvancePaymentInv {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'deposit_account_id', type: 'int' })
  public deposit_account_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'advance_payment_method', type: 'varchar' })
  public advance_payment_method: string;

  @Column({ name: 'fixed_amount', type: 'int' })
  public fixed_amount: number;

  @Column({ name: 'deduct_down_payments', type: 'tinyint' })
  public deduct_down_payments: boolean;

  @Column({ name: 'amount', type: 'int' })
  public amount: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SaleAdvancePaymentInv>) {
    Object.assign(this, data);
  }
}
