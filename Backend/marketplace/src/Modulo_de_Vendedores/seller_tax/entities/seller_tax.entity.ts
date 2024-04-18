import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity({ name: 'seller_tax' })
export class SellerTax {
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
  @Column({ name: 'tax_rate', type: 'decimal', precision: 10, scale: 2 })
  public tax_rate: number;

  @Expose()
  @Column({ name: 'tax_type', type: 'varchar' })
  public tax_type: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  constructor(data: Partial<SellerTax>) {
    Object.assign(this, data);
  }
}
