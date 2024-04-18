import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
import { Products } from 'src/Modulo-products/products/entities/products.entity';
import { SaleOrder } from 'src/Modulo-store/sale-order/entities/sale-order.entity';
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

@Entity({ name: 'product_product' })
export class ProductProduct {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  public name: string;

  @Column({ name: 'default_code', type: 'varchar', length: 255 })
  public default_code: string;

  @Column({ name: 'product_tmpl_id', type: 'int' })
  public product_tmpl_id: number;

  //Muchos a Uno
  @ManyToOne(() => ProductsTemplate, (template) => template.productos)
  @JoinColumn({ name: 'product_tmpl_id' })
  public template: ProductsTemplate;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'sale_ok', type: 'tinyint' })
  public sale_ok: boolean;

  @Column({ name: 'purchase_ok', type: 'tinyint' })
  public purchase_ok: boolean;

  @Column({ name: 'type', type: 'varchar' })
  public type: string;

  @Column({ name: 'categ_id', type: 'int' })
  public categ_id: number;

  @Column({ name: 'uom_id', type: 'int' })
  public uom_id: number;

  @Column({ name: 'list_price', type: 'float' })
  public list_price: number;

  @Column({ name: 'volume', type: 'varchar' })
  public volume: string;

  @Column({ name: 'weight', type: 'varchar' })
  public weight: string;

  @Column({ name: 'image', type: 'int' })
  public image: number;

  @Column({ name: 'description', type: 'int' })
  public description: number;

  @Column({ name: 'attribute_value_ids', type: 'int' })
  public attribute_value_ids: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  //Uno a Uno Products
  @OneToOne(() => Products, (product) => product.productsProducts)
  @JoinColumn({ name: 'product_id' })
  public product: Products;

  //--------------------------------------------------------------------
  @Column({ name: 'productsProduct_id', type: 'int' })
  public productsProduct_id: number;

  @ManyToOne(() => SaleOrder, (saleOrder) => saleOrder.productProducts)
  @JoinColumn({ name: 'productsProduct_id' })
  public saleOrder: SaleOrder;
  //---------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductProduct>) {
    Object.assign(this, data);
  }
}
