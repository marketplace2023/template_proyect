import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Expose } from 'class-transformer';

@Entity({ name: 'seller_rating' })
export class SellerRating {
  @Expose()
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Expose()
  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Expose()
  @Column({ name: 'res_partner_id', type: 'int' })
  public res_partner_id: number;

  @Expose()
  @Column({ name: 'res_users_id', type: 'int' })
  public res_users_id: number;

  @Expose()
  @Column({ name: 'rating', type: 'int' })
  public rating: number;

  @Expose()
  @Column({ name: 'review', type: 'text' })
  public review: string;

  @Expose()
  @Column({ name: 'date', type: 'timestamp' })
  public date: Date;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  constructor(data: Partial<SellerRating>) {
    Object.assign(this, data);
  }
}
