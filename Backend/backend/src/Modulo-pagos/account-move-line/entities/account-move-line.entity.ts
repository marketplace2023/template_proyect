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

@Entity({ name: 'account_move_line' })
export class AccountMoveLine {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'move_id', type: 'int' })
  public move_id: number;

  @Column({ name: 'account_id', type: 'int' })
  public account_id: number;

  @Column({ name: 'credit', type: 'float' })
  public credit: number;

  @Column({ name: 'debit', type: 'float' })
  public debit: number;

  @Column({ name: 'amount_currency', type: 'float' })
  public amount_currency: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'analytic_account_id', type: 'int' })
  public analytic_account_id: number;

  @Column({ name: 'analytic_tag_ids', type: 'int' })
  public analytic_tag_ids: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'date', type: 'date' })
  public date: Date;

  @Column({ name: 'ref', type: 'varchar' })
  public ref: string;

  //Mucho a Uno accountMoveLine - payment
  @Column({ name: 'payment_id', type: 'int' })
  public payment_id: number;

  @ManyToOne(() => Payment, (payment) => payment.accountMoveLines)
  @JoinColumn({ name: 'payment_id' })
  public payment: Payment;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountMoveLine>) {
    Object.assign(this, data);
  }
}
