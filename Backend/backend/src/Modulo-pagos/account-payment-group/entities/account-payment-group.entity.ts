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

@Entity({ name: 'account_payment_group' })
export class AccountPaymentGroup {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'amount', type: 'int' })
  public amount: number;

  @Column({ name: 'payment_mode_id', type: 'int' })
  public payment_mode_id: number;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'reconciled', type: 'tinyint' })
  public reconciled: boolean;

  @Column({ name: 'payments_ids', type: 'int' })
  public payments_ids: number;

  //Mucho a Uno accountPaymentGroups - payment
  @Column({ name: 'payments_id', type: 'int' })
  public payments_id: number;

  @ManyToOne(() => Payment, (payment) => payment.accountPaymentGroups)
  @JoinColumn({ name: 'payments_id' })
  public payment: Payment;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountPaymentGroup>) {
    Object.assign(this, data);
  }
}
