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

@Entity({ name: 'product_ribbon' })
export class ProductRibbon {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  public name: string;

  @Column({ name: 'color', type: 'varchar', length: 64 })
  public color: string;

  @Column({ name: 'position', type: 'varchar', length: 64 })
  public position: string;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  //Muchos a Uno
  @ManyToOne(() => Products, (product) => product.ribbons)
  @JoinColumn({ name: 'product_id' })
  public product: Products;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductRibbon>) {
    Object.assign(this, data);
  }
}
