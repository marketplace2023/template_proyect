import { ProductsSupplier } from 'src/Modulo-products/products-supplier/entities/products-supplier.entity';
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

@Entity({ name: 'product_supplierinfo' })
export class ProductSupplierinfo {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Column({ name: 'supplier_id', type: 'int' })
  public supplier_id: number;

  //Muchos a Uno
  @ManyToOne(() => ProductsSupplier, (supplier) => supplier.productSupplierinfo)
  @JoinColumn({ name: 'supplier_id' })
  public suppliers: ProductsSupplier;

  @Column({ name: 'price', type: 'float' })
  public price: number;

  @Column({ name: 'delay', type: 'int' })
  public delay: number;

  @Column({ name: 'min_quantity', type: 'float' })
  public min_quantity: number;

  @Column({ name: 'max_quantity', type: 'float' })
  public max_quantity: number;

  @Column({ name: 'product_code', type: 'varchar' })
  public product_code: string;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  //Muchos a Uno
  @ManyToOne(() => Products, (product) => product.supplierinfos)
  @JoinColumn({ name: 'product_id' })
  public product: Products;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductSupplierinfo>) {
    Object.assign(this, data);
  }
}
