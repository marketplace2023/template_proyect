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

@Entity({ name: 'account_journal' })
export class AccountJournal {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'type', type: 'varchar' })
  public type: string;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'default_debit_account_id', type: 'int' })
  public default_debit_account_id: number;

  @Column({ name: 'default_credit_account_id', type: 'int' })
  public default_credit_account_id: number;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  //Mucho a Uno accountJournal - payment
  @Column({ name: 'payment_id', type: 'int' })
  public payment_id: number;

  @ManyToOne(() => Payment, (payment) => payment.accountJournals)
  @JoinColumn({ name: 'payment_id' })
  public payment: Payment;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountJournal>) {
    Object.assign(this, data);
  }
}
