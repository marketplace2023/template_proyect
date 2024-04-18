import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity({ name: 'seller_commission_rule' })
export class SellerCommissionRule {
  @Expose()
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Expose()
  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Expose()
  @Column({ name: 'commission_type', type: 'int' })
  public commission_type: number;

  @Expose()
  @Column({ name: 'rate', type: 'decimal', precision: 10, scale: 2 })
  public rate: number;

  @Expose()
  @Column({ name: 'min_sales_amount', type: 'decimal', precision: 10, scale: 2 })
  public min_sales_amount: number;

  @Expose()
  @Column({ name: 'max_sales_amount', type: 'decimal', precision: 10, scale: 2 })
  public max_sales_amount: number;

  @Expose()
  @Column({ name: 'min_sales_quantity', type: 'int' })
  public min_sales_quantity: number;

  @Expose()
  @Column({ name: 'max_sales_quantity', type: 'int' })
  public max_sales_quantity: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  constructor(data: Partial<SellerCommissionRule>) {
    Object.assign(this, data);
  }
}
