import { ProductsAttribute } from 'src/Modulo-products/products-attribute/entities/products-attribute.entity';
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

@Entity({ name: 'product_attribute_value' })
export class ProductsAttributeValue {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'attribute_id', type: 'int' })
  public attribute_id: number;

  @Column({ name: 'color', type: 'int' })
  public color: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'html_color', type: 'varchar', length: 255 })
  public html_color: string;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  public name: string;

  @Column({ name: 'is_custom', type: 'tinyint' })
  public is_custom: boolean;

  @Column({ name: 'product_attribute_id', type: 'int' })
  public product_attribute_id: number;

  //Muchos a Uno ProductsAttribute
  @ManyToOne(() => ProductsAttribute, (attribute) => attribute.attributes)
  @JoinColumn({ name: 'product_attribute_id' })
  public attribute: ProductsAttribute;

  @Column({ name: 'product_tmpl_id', type: 'int' })
  public product_tmpl_id: number;

  //Muchos a Uno ProductsTemplate
  @ManyToOne(() => ProductsTemplate, (template) => template.attributeValues)
  @JoinColumn({ name: 'product_tmpl_id' })
  public template: ProductsTemplate;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  //Muchos a Uno product
  @ManyToOne(() => Products, (product) => product.attributeValues)
  @JoinColumn({ name: 'product_id' })
  public product: Products;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductsAttributeValue>) {
    Object.assign(this, data);
  }
}
