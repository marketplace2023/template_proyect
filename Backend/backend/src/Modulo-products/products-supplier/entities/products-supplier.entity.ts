import { ProductSupplierTaxesRel } from 'src/Modulo-products/product-supplier-taxes-rel/entities/product-supplier-taxes-rel.entity';
import { ProductSupplierinfo } from 'src/Modulo-products/product-supplierinfo/entities/product-supplierinfo.entity';
import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
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

@Entity({ name: 'products-supplier' })
export class ProductsSupplier {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Column({ name: 'product_tmpl_id', type: 'int' })
  public product_tmpl_id: number;

  //Muchos a Uno ProductsTemplate
  @ManyToOne(() => ProductsTemplate, (template) => template.suppliers)
  @JoinColumn({ name: 'product_tmpl_id' })
  public template: ProductsTemplate;

  //Uno a Mucho ProductSupplierinfo
  @OneToMany(
    () => ProductSupplierinfo,
    (productSupplierinfo) => productSupplierinfo.suppliers,
  )
  public productSupplierinfo: ProductSupplierinfo[];

  //Uno a Mucho ProductSupplierinfo
  @OneToMany(
    () => ProductSupplierTaxesRel,
    (productSupplierTaxesRel) => productSupplierTaxesRel.suppliers,
  )
  public productSupplierTaxesRel: ProductSupplierTaxesRel[];

  @Column({ name: 'delay', type: 'int' })
  public delay: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'product_name', type: 'varchar', length: 255 })
  public product_name: string;

  @Column({ name: 'product_code', type: 'varchar', length: 255 })
  public product_code: string;

  @Column({ name: 'date_start', type: 'date' })
  public date_start: Date;

  @Column({ name: 'date_end', type: 'date' })
  public date_end: Date;

  @Column({ name: 'min_qty', type: 'int' })
  public min_qty: number;

  @Column({ name: 'price', type: 'int' })
  public price: number;

  //Muchos a Uno
  @ManyToOne(() => Products, (product) => product.suppliers)
  @JoinColumn({ name: 'product_id' })
  public product: Products;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductsSupplier>) {
    Object.assign(this, data);
  }
}
