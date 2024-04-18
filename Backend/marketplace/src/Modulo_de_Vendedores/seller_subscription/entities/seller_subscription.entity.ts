import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity({ name: 'seller_subscription' })
export class SellerSubscription {
  @Expose()
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Expose()
  @Column({ name: 'res_partner_id', type: 'int' })
  public res_partner_id: number;

  @Expose()
  @Column({ name: 'duration', type: 'varchar' })
  public duration: string;

  @Expose()
  @Column({ name: 'price', type: 'decimal', precision: 10, scale: 2 })
  public price: number;

  @Expose()
  @Column({ name: 'benefits', type: 'text' })
  public benefits: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  constructor(data: Partial<SellerSubscription>) {
    Object.assign(this, data);
  }
}
