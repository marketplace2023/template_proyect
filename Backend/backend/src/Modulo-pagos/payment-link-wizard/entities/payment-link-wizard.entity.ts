import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'payment_link_wizard' })
export class PaymentLinkWizard {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'res_id', type: 'int' })
  public res_id: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'res_model', type: 'varchar' })
  public res_model: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'payment_provider_selection', type: 'varchar' })
  public payment_provider_selection: string;

  @Column({ name: 'amount', type: 'decimal' })
  public amount: number;

  @Column({ name: 'amount_max', type: 'decimal' })
  public amount_max: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<PaymentLinkWizard>) {
    Object.assign(this, data);
  }
}
