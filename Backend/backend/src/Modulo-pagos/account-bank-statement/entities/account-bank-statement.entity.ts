import { Payment } from 'src/Modulo-pagos/payment/entities/payment.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'account_bank_statement' })
export class AccountBankStatement {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'date', type: 'date' })
  public date: Date;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'balance_start', type: 'int' })
  public balance_start: number;

  @Column({ name: 'balance_end', type: 'int' })
  public balance_end: number;

  @Column({ name: 'journal_id', type: 'int' })
  public journal_id: number;

  @Column({ name: 'transactions_ids', type: 'int' })
  public transactions_ids: number;

  @Column({ name: 'reconciled', type: 'tinyint' })
  public reconciled: boolean;

  //Mucho a Uno accountJournal - payment
  @Column({ name: 'payment_id', type: 'int' })
  public payment_id: number;

  @ManyToOne(() => Payment, (payment) => payment.accountBankStatements)
  @JoinColumn({ name: 'payment_id' })
  public payment: Payment;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountBankStatement>) {
    Object.assign(this, data);
  }
}
