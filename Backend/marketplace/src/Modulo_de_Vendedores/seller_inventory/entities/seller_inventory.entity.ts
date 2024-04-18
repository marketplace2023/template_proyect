import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity({ name: 'seller_inventory' })
export class SellerInventory {
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
  @Column({ name: 'product_product_id', type: 'int' })
  public product_product_id: number;

  @Expose()
  @Column({ name: 'stock_quantity', type: 'decimal', precision: 10, scale: 2 })
  public stock_quantity: number;

  @Expose()
  @Column({ name: 'low_stock_threshold', type: 'decimal', precision: 10, scale: 2 })
  public low_stock_threshold: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  constructor(data: Partial<SellerInventory>) {
    Object.assign(this, data);
  }
}
