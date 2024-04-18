import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity({ name: 'seller_complaint' })
export class SellerComplaint {
  @Expose()
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Expose()
  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Expose()
  @Column({ name: 'description', type: 'text' })
  public description: string;

  @Expose()
  @Column({ name: 'res_partner_id', type: 'int' })
  public res_partner_id: number;

  @Expose()
  @Column({ name: 'res_user_id', type: 'int' })
  public res_user_id: number;

  @Expose()
  @Column({ name: 'order_id', type: 'int' })
  public order_id: number;

  @Expose()
  @Column({ name: 'status', type: 'varchar' })
  public status: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  constructor(data: Partial<SellerComplaint>) {
    Object.assign(this, data);
  }
}
