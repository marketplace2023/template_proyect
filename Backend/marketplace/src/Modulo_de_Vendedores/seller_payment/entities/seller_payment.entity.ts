import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity({ name: 'seller_payment' })
export class SellerPayment {
  @Expose()
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Expose()
  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Expose()
  @Column({ name: 'res_users_id', type: 'int' })
  public res_users_id: number;

  @Expose()
  @Column({ name: 'payment_date', type: 'timestamp' })
  public payment_date: Date;

  @Expose()
  @Column({ name: 'amount', type: 'decimal', precision: 10, scale: 2 })
  public amount: number;

  @Expose()
  @Column({ name: 'payment_method', type: 'varchar' })
  public payment_method: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  constructor(data: Partial<SellerPayment>) {
    Object.assign(this, data);
  }
}
