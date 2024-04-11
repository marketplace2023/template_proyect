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

@Entity({ name: 'invoice' })
export class Invoice {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'number', type: 'varchar' })
  public number: string;

  @Column({ name: 'date_invoice', type: 'date' })
  public date_invoice: Date;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'type', type: 'varchar' })
  public type: string;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'payment_term_id', type: 'int' })
  public payment_term_id: number;

  @Column({ name: 'amount_total', type: 'float' })
  public amount_total: number;

  @Column({ name: 'amount_tax', type: 'float' })
  public amount_tax: number;

  @Column({ name: 'amount_untaxed', type: 'float' })
  public amount_untaxed: number;

  @Column({ name: 'invoice_line_ids', type: 'int' })
  public invoice_line_ids: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  //Mucho a Uno paymentOrders - payment
  @Column({ name: 'payment_id', type: 'int' })
  public payment_id: number;

  @ManyToOne(() => Payment, (payment) => payment.paymentOrders)
  @JoinColumn({ name: 'payment_id' })
  public payment: Payment;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<Invoice>) {
    Object.assign(this, data);
  }
}
