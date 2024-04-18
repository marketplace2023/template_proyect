import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity({ name: 'seller_payout' })
export class SellerPayout {
  @Expose()
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Expose()
  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Expose()
  @Column({ name: 'res_user_id', type: 'int' })
  public res_user_id: number;

  @Expose()
  @Column({ name: 'payout_date', type: 'timestamp' })
  public payout_date: Date;

  @Expose()
  @Column({ name: 'amount', type: 'decimal', precision: 10, scale: 2 })
  public amount: number;

  @Expose()
  @Column({ name: 'payout_method', type: 'varchar' })
  public payout_method: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  constructor(data: Partial<SellerPayout>) {
    Object.assign(this, data);
  }
}
