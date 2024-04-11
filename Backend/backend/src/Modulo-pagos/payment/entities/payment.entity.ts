import { AccountAccount } from 'src/Modulo-pagos/account-account/entities/account-account.entity';
import { AccountBankStatement } from 'src/Modulo-pagos/account-bank-statement/entities/account-bank-statement.entity';
import { AccountInvoiceLine } from 'src/Modulo-pagos/account-invoice-line/entities/account-invoice-line.entity';
import { AccountJournal } from 'src/Modulo-pagos/account-journal/entities/account-journal.entity';
import { AccountMoveLine } from 'src/Modulo-pagos/account-move-line/entities/account-move-line.entity';
import { AccountPaymentAccountBankStatementLineRel } from 'src/Modulo-pagos/account-payment-account-bank-statement-line-rel/entities/account-payment-account-bank-statement-line-rel.entity';
import { AccountPaymentGroup } from 'src/Modulo-pagos/account-payment-group/entities/account-payment-group.entity';
import { AccountPaymentRegisterMoveLineRel } from 'src/Modulo-pagos/account-payment-register-move-line-rel/entities/account-payment-register-move-line-rel.entity';
import { AccountTaxSaleAdvancePaymentInvRelModule } from 'src/Modulo-pagos/account-tax-sale-advance-payment-inv-rel/account-tax-sale-advance-payment-inv-rel.module';
import { AccountTaxSaleAdvancePaymentInvRel } from 'src/Modulo-pagos/account-tax-sale-advance-payment-inv-rel/entities/account-tax-sale-advance-payment-inv-rel.entity';
import { AccountTax } from 'src/Modulo-pagos/account-tax/entities/account-tax.entity';
import { DeliveryOrder } from 'src/Modulo-pagos/delivery-order/entities/delivery-order.entity';
import { Invoice } from 'src/Modulo-pagos/invoice/entities/invoice.entity';
import { PaymentOrder } from 'src/Modulo-pagos/payment-order/entities/payment-order.entity';
import { PaymentReceipt } from 'src/Modulo-pagos/payment-receipt/entities/payment-receipt.entity';
import { PaymentTerm } from 'src/Modulo-pagos/payment-term/entities/payment-term.entity';
import { PosConfigPosPaymentMethodRel } from 'src/Modulo-pagos/pos-config-pos-payment-method-rel/entities/pos-config-pos-payment-method-rel.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'payment' })
export class Payment {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'currency_id', type: 'varchar' })
  public currency_id: string;

  @Column({ name: 'amount', type: 'int' })
  public amount: number;

  @Column({ name: 'payment_mode_id', type: 'int' })
  public payment_mode_id: number;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'reconciled', type: 'tinyint' })
  public reconciled: boolean;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'order_id', type: 'int' })
  public order_id: number;

  @Column({ name: 'invoice_id', type: 'int' })
  public invoice_id: number;

  @Column({ name: 'payment_group_id', type: 'int' })
  public payment_group_id: number;

  //-----------------------RELACIONES-------------------------------
  //uno a mucho AccountJournal
  @OneToMany(() => AccountJournal, (accountJournal) => accountJournal.payment)
  public accountJournals: AccountJournal;

  //uno a mucho AccountBankStatement
  @OneToMany(
    () => AccountBankStatement,
    (accountBankStatement) => accountBankStatement.payment,
  )
  public accountBankStatements: AccountBankStatement;

  //uno a mucho AccountPaymentGroup
  @OneToMany(
    () => AccountPaymentGroup,
    (accountPaymentGroup) => accountPaymentGroup.payment,
  )
  public accountPaymentGroups: AccountPaymentGroup;

  //uno a mucho PaymentTerm
  @OneToMany(() => PaymentTerm, (paymentTerm) => paymentTerm.payment)
  public paymentTerms: PaymentTerm;

  //uno a mucho PaymentReceipt
  @OneToMany(() => PaymentReceipt, (paymentReceipt) => paymentReceipt.payment)
  public paymentReceipts: PaymentReceipt;

  //uno a mucho AccountAccount
  @OneToMany(() => AccountAccount, (accountAccount) => accountAccount.payment)
  public accountAccounts: AccountAccount;

  //uno a mucho AccountMoveLine
  @OneToMany(
    () => AccountMoveLine,
    (accountMoveLine) => accountMoveLine.payment,
  )
  public accountMoveLines: AccountMoveLine;

  //uno a mucho AccountInvoiceLine
  @OneToMany(
    () => AccountInvoiceLine,
    (accountInvoiceLine) => accountInvoiceLine.payment,
  )
  public accountInvoiceLines: AccountInvoiceLine;

  //uno a mucho AccountTax
  @OneToMany(() => AccountTax, (accountTax) => accountTax.payment)
  public accountTaxs: AccountTax;

  //uno a mucho DeliveryOrder
  @OneToMany(() => DeliveryOrder, (deliveryOrder) => deliveryOrder.payment)
  public deliveryOrders: DeliveryOrder;

  //uno a mucho PaymentOrder
  @OneToMany(() => PaymentOrder, (paymentOrder) => paymentOrder.payment)
  public paymentOrders: PaymentOrder;

  //uno a mucho Invoice
  @OneToMany(() => Invoice, (invoice) => invoice.payment)
  public invoices: Invoice;

  //uno a mucho AccountPaymentAccountBankStatementLineRel
  @OneToMany(
    () => AccountPaymentAccountBankStatementLineRel,
    (accountPaymentAccountBankStatementLineRel) =>
      accountPaymentAccountBankStatementLineRel.payment,
  )
  public accountPaymentAccountBankStatementLineRels: AccountPaymentAccountBankStatementLineRel;

  //uno a mucho AccountPaymentRegisterMoveLineRel
  @OneToMany(
    () => AccountPaymentRegisterMoveLineRel,
    (accountPaymentRegisterMoveLineRel) =>
      accountPaymentRegisterMoveLineRel.payment,
  )
  public accountPaymentRegisterMoveLineRels: AccountPaymentRegisterMoveLineRel;

  //uno a mucho AccountTaxSaleAdvancePaymentInvRel
  @OneToMany(
    () => AccountTaxSaleAdvancePaymentInvRel,
    (accountTaxSaleAdvancePaymentInvRel) =>
      accountTaxSaleAdvancePaymentInvRel.payment,
  )
  public accountTaxSaleAdvancePaymentInvRels: AccountTaxSaleAdvancePaymentInvRel;

  //uno a mucho PosConfigPosPaymentMethodRel
  @OneToMany(
    () => PosConfigPosPaymentMethodRel,
    (posConfigPosPaymentMethodRel) => posConfigPosPaymentMethodRel.payment,
  )
  public posConfigPosPaymentMethodRels: PosConfigPosPaymentMethodRel;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<Payment>) {
    Object.assign(this, data);
  }
}
