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

@Entity({ name: 'payment_term' })
export class PaymentTerm {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'days', type: 'int' })
  public days: number;

  @Column({ name: 'discount', type: 'int' })
  public discount: number;

  @Column({ name: 'percentage', type: 'tinyint' })
  public percentage: boolean;

  @Column({ name: 'days_after_due', type: 'int' })
  public days_after_due: number;

  //Mucho a Uno paymentTerms - payment
  @Column({ name: 'payments_id', type: 'int' })
  public payments_id: number;

  @ManyToOne(() => Payment, (payment) => payment.paymentTerms)
  @JoinColumn({ name: 'payments_id' })
  public payment: Payment;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<PaymentTerm>) {
    Object.assign(this, data);
  }
}
