import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity({ name: 'seller_product' })
export class SellerProduct {
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
  @Column({ name: 'product_category_id', type: 'int' })
  public product_category_id: number;

  @Expose()
  @Column({ name: 'description', type: 'text' })
  public description: string;

  @Expose()
  @Column({ name: 'price', type: 'decimal', precision: 10, scale: 2 })
  public price: number;

  @Expose()
  @Column({ name: 'quantity_available', type: 'int' })
  public quantity_available: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  constructor(data: Partial<SellerProduct>) {
    Object.assign(this, data);
  }
}
