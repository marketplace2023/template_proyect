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

@Entity({ name: 'account_payment_account_bank_statement_line_rel' })
export class AccountPaymentAccountBankStatementLineRel {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'payment_id', type: 'int' })
  public payment_id: number;

  @Column({ name: 'bank_statement_line_id', type: 'int' })
  public bank_statement_line_id: number;

  @Column({ name: 'amount', type: 'float' })
  public amount: number;

  //Mucho a Uno accountPaymentAccountBankStatementLineRels - payment

  @ManyToOne(
    () => Payment,
    (payment) => payment.accountPaymentAccountBankStatementLineRels,
  )
  @JoinColumn({ name: 'bank_statement_line_id' })
  public payment: Payment;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountPaymentAccountBankStatementLineRel>) {
    Object.assign(this, data);
  }
}
