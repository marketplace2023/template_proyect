import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity({ name: 'seller_dashboard' })
export class SellerDashboard {
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
  @Column({ name: 'total_sales', type: 'decimal', precision: 10, scale: 2 })
  public total_sales: number;

  @Expose()
  @Column({ name: 'total_orders', type: 'int' })
  public total_orders: number;

  @Expose()
  @Column({ name: 'total_customers', type: 'int' })
  public total_customers: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  constructor(data: Partial<SellerDashboard>) {
    Object.assign(this, data);
  }
}
