import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'payment_refund_wizard' })
export class PaymentRefundWizard {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'payment_id', type: 'int' })
  public payment_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'amount_to_refund', type: 'decimal' })
  public amount_to_refund: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<PaymentRefundWizard>) {
    Object.assign(this, data);
  }
}
