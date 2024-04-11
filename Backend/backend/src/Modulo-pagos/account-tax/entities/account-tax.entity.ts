import { AccountTaxSaleAdvancePaymentInvRel } from 'src/Modulo-pagos/account-tax-sale-advance-payment-inv-rel/entities/account-tax-sale-advance-payment-inv-rel.entity';
import { Payment } from 'src/Modulo-pagos/payment/entities/payment.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'account_tax' })
export class AccountTax {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'type', type: 'varchar' })
  public type: string;

  @Column({ name: 'amount', type: 'float' })
  public amount: number;

  @Column({ name: 'account_id', type: 'int' })
  public account_id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  //Mucho a Uno accountInvoiceLine - payment
  @Column({ name: 'payment_id', type: 'int' })
  public payment_id: number;

  @ManyToOne(() => Payment, (payment) => payment.accountTaxs)
  @JoinColumn({ name: 'payment_id' })
  public payment: Payment;

  //uno a mucho accountTax
  @OneToMany(
    () => AccountTaxSaleAdvancePaymentInvRel,
    (accountTaxSaleAdvancePaymentInvRel) =>
      accountTaxSaleAdvancePaymentInvRel.accountTaxs,
  )
  public accountTaxSaleAdvancePaymentInvRels: AccountTax;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountTax>) {
    Object.assign(this, data);
  }
}
