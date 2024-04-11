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

@Entity({ name: 'account_payment_register_move_line_rel' })
export class AccountPaymentRegisterMoveLineRel {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'payment_register_id', type: 'int' })
  public payment_register_id: number;

  @Column({ name: 'move_line_id', type: 'int' })
  public move_line_id: number;

  @Column({ name: 'amount', type: 'float' })
  public amount: number;

  //Mucho a Uno accountPaymentAccountBankStatementLineRels - payment

  @ManyToOne(
    () => Payment,
    (payment) => payment.accountPaymentRegisterMoveLineRels,
  )
  @JoinColumn({ name: 'payment_register_id' })
  public payment: Payment;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountPaymentRegisterMoveLineRel>) {
    Object.assign(this, data);
  }
}
