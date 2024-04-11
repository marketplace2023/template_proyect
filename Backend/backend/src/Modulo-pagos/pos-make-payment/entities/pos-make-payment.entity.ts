import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'pos_make_payment' })
export class PosMakePayment {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'config_id', type: 'int' })
  public config_id: number;

  @Column({ name: 'payment_method_id', type: 'varchar' })
  public payment_method_id: string;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'payment_name', type: 'varchar' })
  public payment_name: string;

  @Column({ name: 'amount', type: 'int' })
  public amount: number;

  @Column({ name: 'payment_date', type: 'date' })
  public payment_date: Date;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<PosMakePayment>) {
    Object.assign(this, data);
  }
}
