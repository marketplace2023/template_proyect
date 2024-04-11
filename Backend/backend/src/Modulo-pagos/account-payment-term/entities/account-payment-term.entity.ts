import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'account_payment_term' })
export class AccountPaymentTerm {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'note', type: 'varchar' })
  public note: string;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'display_on_invoice', type: 'tinyint' })
  public display_on_invoice: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountPaymentTerm>) {
    Object.assign(this, data);
  }
}
