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

@Entity({ name: 'payment_receipt' })
export class PaymentReceipt {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'payment_order_id', type: 'int' })
  public payment_order_id: number;

  @Column({ name: 'payment_date', type: 'date' })
  public payment_date: Date;

  @Column({ name: 'payment_method_id', type: 'int' })
  public payment_method_id: number;

  @Column({ name: 'amount', type: 'int' })
  public amount: number;

  @Column({ name: 'reference', type: 'varchar' })
  public reference: string;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  //Mucho a Uno paymentTerms - payment
  @Column({ name: 'payment_id', type: 'int' })
  public payment_id: number;

  @ManyToOne(() => Payment, (payment) => payment.paymentReceipts)
  @JoinColumn({ name: 'payment_id' })
  public payment: Payment;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<PaymentReceipt>) {
    Object.assign(this, data);
  }
}
