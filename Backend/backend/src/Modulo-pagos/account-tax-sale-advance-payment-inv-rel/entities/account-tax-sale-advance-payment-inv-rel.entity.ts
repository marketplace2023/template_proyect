import { AccountTax } from 'src/Modulo-pagos/account-tax/entities/account-tax.entity';
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

@Entity({ name: 'account_tax_sale_advance_payment_inv_rel' })
export class AccountTaxSaleAdvancePaymentInvRel {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'tax_id', type: 'int' })
  public tax_id: number;

  @Column({ name: 'invoice_id', type: 'int' })
  public invoice_id: number;

  @Column({ name: 'amount', type: 'float' })
  public amount: number;

  //Mucho a Uno accountPaymentAccountBankStatementLineRels - payment
  @Column({ name: 'payment_id', type: 'int' })
  public payment_id: number;

  @ManyToOne(
    () => Payment,
    (payment) => payment.accountPaymentRegisterMoveLineRels,
  )
  @JoinColumn({ name: 'payment_id' })
  public payment: Payment;

  //Mucho a Uno accountTaxs - payment
  @ManyToOne(
    () => AccountTax,
    (accountTax) => accountTax.accountTaxSaleAdvancePaymentInvRels,
  )
  @JoinColumn({ name: 'tax_id' })
  public accountTaxs: Payment;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountTaxSaleAdvancePaymentInvRel>) {
    Object.assign(this, data);
  }
}
