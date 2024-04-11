import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'pos_payment' })
export class PosPayment {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'pos_order_id', type: 'int' })
  public pos_order_id: number;

  @Column({ name: 'payment_method_id', type: 'int' })
  public payment_method_id: number;

  @Column({ name: 'session_id', type: 'int' })
  public session_id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'account_move_id', type: 'int' })
  public account_move_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'card_type', type: 'varchar' })
  public card_type: string;

  @Column({ name: 'cardholder_name', type: 'varchar' })
  public cardholder_name: string;

  @Column({ name: 'transaction_id', type: 'varchar' })
  public transaction_id: string;

  @Column({ name: 'payment_status', type: 'varchar' })
  public payment_status: string;

  @Column({ name: 'ticket', type: 'varchar' })
  public ticket: string;

  @Column({ name: 'amount', type: 'decimal' })
  public amount: number;

  @Column({ name: 'is_change', type: 'tinyint' })
  public is_change: boolean;

  @Column({ name: 'payment_date', type: 'date' })
  public payment_date: Date;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<PosPayment>) {
    Object.assign(this, data);
  }
}
