import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'payment_token' })
export class PaymentToken {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'provider_id', type: 'int' })
  public provider_id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'payment_details', type: 'varchar' })
  public payment_details: string;

  @Column({ name: 'provider_ref', type: 'varchar' })
  public provider_ref: string;

  @Column({ name: 'verified', type: 'tinyint' })
  public verified: boolean;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<PaymentToken>) {
    Object.assign(this, data);
  }
}
