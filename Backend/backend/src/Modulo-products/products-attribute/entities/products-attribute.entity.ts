import { ProductsAttributeValue } from 'src/Modulo-products/products-attribute-value/entities/products-attribute-value.entity';
import { ProductsBarcode } from 'src/Modulo-products/products-barcode/entities/products-barcode.entity';
import { Products } from 'src/Modulo-products/products/entities/products.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products-attribute' })
export class ProductsAttribute {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'create_variant', type: 'varchar', length: 255 })
  public create_variant: string;

  @Column({ name: 'display_type', type: 'varchar', length: 255 })
  public display_type: string;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  public name: string;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  //Muchos a Uno
  @ManyToOne(() => Products, (product) => product.attributes)
  @JoinColumn({ name: 'product_id' })
  public product: Products;

  //Uno a Mucho ProductsAttributeValue
  @OneToMany(
    () => ProductsAttributeValue,
    (attributeValue) => attributeValue.attribute,
  )
  public attributes: ProductsAttributeValue[];

  //Uno a Mucho ProductsBarcode
  @OneToMany(() => ProductsBarcode, (barcode) => barcode.attribute)
  public barcodes: ProductsBarcode[];

  @CreateDateColumn({ name: 'created-at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductsAttribute>) {
    Object.assign(this, data);
  }
}
