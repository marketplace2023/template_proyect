import { ProductsAttribute } from 'src/Modulo-products/products-attribute/entities/products-attribute.entity';
import { Products } from 'src/Modulo-products/products/entities/products.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products-barcode' })
export class ProductsBarcode {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'attribute_id', type: 'int' })
  public attribute_id: number;

  //Muchos a Uno ProductsTemplate
  @ManyToOne(() => ProductsAttribute, (attribute) => attribute.barcodes)
  @JoinColumn({ name: 'attribute_id' })
  public attribute: ProductsAttribute;

  @Column({ name: 'color', type: 'int' })
  public color: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'html_color', type: 'varchar' })
  public html_color: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'is_custom', type: 'tinyint' })
  public is_custom: boolean;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  //Uno a Uno Products
  @OneToOne(() => Products, (product) => product.producBarcode)
  @JoinColumn({ name: 'product_id' })
  public product: Products;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductsBarcode>) {
    Object.assign(this, data);
  }
}
