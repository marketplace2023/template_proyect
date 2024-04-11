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

@Entity({ name: 'account_invoice_line' })
export class AccountInvoiceLine {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'invoice_id', type: 'int' })
  public invoice_id: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Column({ name: 'quantity', type: 'float' })
  public quantity: number;

  @Column({ name: 'price_unit', type: 'float' })
  public price_unit: number;

  @Column({ name: 'discount', type: 'float' })
  public discount: number;

  @Column({ name: 'tax_ids', type: 'int' })
  public tax_ids: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  //Mucho a Uno accountInvoiceLine - payment
  @Column({ name: 'payment_id', type: 'int' })
  public payment_id: number;

  @ManyToOne(() => Payment, (payment) => payment.accountInvoiceLines)
  @JoinColumn({ name: 'payment_id' })
  public payment: Payment;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountInvoiceLine>) {
    Object.assign(this, data);
  }
}
