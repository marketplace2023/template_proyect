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

@Entity({ name: 'product_packaging' })
export class ProductPackaging {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  public name: string;

  @Column({ name: 'product_tmpl_id', type: 'int' })
  public product_tmpl_id: number;

  @Column({ name: 'height', type: 'float' })
  public height: number;

  @Column({ name: 'width', type: 'float' })
  public width: number;

  @Column({ name: 'depth', type: 'float' })
  public depth: number;

  @Column({ name: 'weight', type: 'float' })
  public weight: number;

  @Column({ name: 'volume', type: 'float' })
  public volume: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  //Muchos a Uno
  @ManyToOne(() => Products, (product) => product.packagings)
  @JoinColumn({ name: 'product_id' })
  public product: Products;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductPackaging>) {
    Object.assign(this, data);
  }
}
