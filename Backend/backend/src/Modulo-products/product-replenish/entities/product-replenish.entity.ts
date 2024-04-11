import { Products } from 'src/Modulo-products/products/entities/products.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'product_replenish' })
export class ProductReplenish {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Column({ name: 'quantity', type: 'float' })
  public quantity: number;

  @Column({ name: 'date', type: 'date' })
  public date: Date;

  @Column({ name: 'reason', type: 'varchar' })
  public reason: string;

  //Muchos a Uno
  @ManyToOne(() => Products, (product) => product.replenishs)
  @JoinColumn({ name: 'product_id' })
  public product: Products;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductReplenish>) {
    Object.assign(this, data);
  }
}
