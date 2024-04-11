import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'pos_payment_method' })
export class PosPaymentMethod {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'outstanding_account_id', type: 'int' })
  public outstanding_account_id: number;

  @Column({ name: 'receivable_account_id', type: 'int' })
  public receivable_account_id: number;

  @Column({ name: 'journal_id', type: 'int' })
  public journal_id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'use_payment_terminal', type: 'varchar' })
  public use_payment_terminal: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'is_cash_count', type: 'tinyint' })
  public is_cash_count: boolean;

  @Column({ name: 'split_transactions', type: 'tinyint' })
  public split_transactions: boolean;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<PosPaymentMethod>) {
    Object.assign(this, data);
  }
}
