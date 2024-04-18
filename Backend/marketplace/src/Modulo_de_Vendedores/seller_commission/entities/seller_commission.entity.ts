import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity({ name: 'seller_commission' })
export class SellerCommission {
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

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  constructor(data: Partial<SellerCommission>) {
    Object.assign(this, data);
  }
}
