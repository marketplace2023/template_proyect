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

@Entity({ name: 'account_account' })
export class AccountAccount {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'type', type: 'varchar' })
  public type: string;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'parent_id', type: 'int' })
  public parent_id: number;

  @Column({ name: 'child_ids', type: 'int' })
  public child_ids: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'balance', type: 'float' })
  public balance: number;

  @Column({ name: 'reconcile', type: 'tinyint' })
  public reconcile: boolean;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  //Mucho a Uno account - payment
  @Column({ name: 'payment_id', type: 'int' })
  public payment_id: number;

  @ManyToOne(() => Payment, (payment) => payment.accountAccounts)
  @JoinColumn({ name: 'payment_id' })
  public payment: Payment;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountAccount>) {
    Object.assign(this, data);
  }
}
