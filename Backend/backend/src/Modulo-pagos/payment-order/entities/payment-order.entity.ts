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

@Entity({ name: 'payment_order' })
export class PaymentOrder {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'payment_method_id', type: 'int' })
  public payment_method_id: number;

  @Column({ name: 'payment_term_id', type: 'int' })
  public payment_term_id: number;

  @Column({ name: 'amount', type: 'float' })
  public amount: number;

  @Column({ name: 'due_date', type: 'varchar' })
  public due_date: string;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

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

  constructor(data: Partial<PaymentOrder>) {
    Object.assign(this, data);
  }
}
