import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'payment_provider_onboarding_wizard' })
export class PaymentProviderOnboardingWizard {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'payment_method', type: 'varchar' })
  public payment_method: string;

  @Column({ name: 'paypal_user_type', type: 'varchar' })
  public paypal_user_type: string;

  @Column({ name: 'paypal_email_account', type: 'varchar' })
  public paypal_email_account: string;

  @Column({ name: 'paypal_seller_account', type: 'varchar' })
  public paypal_seller_account: string;

  @Column({ name: 'paypal_pdt_token', type: 'varchar' })
  public paypal_pdt_token: string;

  @Column({ name: 'manual_name', type: 'varchar' })
  public manual_name: string;

  @Column({ name: 'journal_name', type: 'varchar' })
  public journal_name: string;

  @Column({ name: 'acc_number', type: 'varchar' })
  public acc_number: string;

  @Column({ name: 'manual_post_msg', type: 'varchar' })
  public manual_post_msg: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<PaymentProviderOnboardingWizard>) {
    Object.assign(this, data);
  }
}
