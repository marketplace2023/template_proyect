import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
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

@Entity({ name: 'product_image' })
export class ProductImage {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'product_tmpl_id', type: 'int' })
  public product_tmpl_id: number;

  //Muchos a Uno
  @ManyToOne(() => ProductsTemplate, (template) => template.images)
  @JoinColumn({ name: 'product_tmpl_id' })
  public template: ProductsTemplate;

  @Column({ name: 'image', type: 'varchar' })
  public image: string;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  //Muchos a Uno
  @ManyToOne(() => Products, (product) => product.images)
  @JoinColumn({ name: 'product_id' })
  public product: Products;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductImage>) {
    Object.assign(this, data);
  }
}
