import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'payment_acquirer' })
export class PaymentAcquirer {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'payment_methont_id', type: 'int' })
  public payment_methont_id: number;

  @Column({ name: 'merchant_id', type: 'varchar' })
  public merchant_id: string;

  @Column({ name: 'merchant_account', type: 'varchar' })
  public merchant_account: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<PaymentAcquirer>) {
    Object.assign(this, data);
  }
}
