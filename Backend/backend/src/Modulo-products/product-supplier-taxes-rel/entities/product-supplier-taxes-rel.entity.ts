import { ProductsSupplier } from 'src/Modulo-products/products-supplier/entities/products-supplier.entity';
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

@Entity({ name: 'product_supplier_taxes_rel' })
export class ProductSupplierTaxesRel {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'supplier_id', type: 'int' })
  public supplier_id: number;

  //Muchos a Uno
  @ManyToOne(
    () => ProductsSupplier,
    (supplier) => supplier.productSupplierTaxesRel,
  )
  @JoinColumn({ name: 'supplier_id' })
  public suppliers: ProductsSupplier;

  @Column({ name: 'tax_id', type: 'int' })
  public tax_id: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductSupplierTaxesRel>) {
    Object.assign(this, data);
  }
}
