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

@Entity({ name: 'pos_config_pos_payment_method_rel' })
export class PosConfigPosPaymentMethodRel {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'pos_config_id', type: 'int' })
  public pos_config_id: number;

  @Column({ name: 'payment_method_id', type: 'int' })
  public payment_method_id: number;

  @Column({ name: 'position', type: 'int' })
  public position: number;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  //Mucho a Uno accountPaymentAccountBankStatementLineRels - payment

  @ManyToOne(() => Payment, (payment) => payment.posConfigPosPaymentMethodRels)
  @JoinColumn({ name: 'pos_config_id' })
  public payment: Payment;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<PosConfigPosPaymentMethodRel>) {
    Object.assign(this, data);
  }
}
