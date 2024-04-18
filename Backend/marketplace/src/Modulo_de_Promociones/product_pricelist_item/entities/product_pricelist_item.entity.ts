import { ProductsPricelist } from 'src/Modulo-products/products-pricelist/entities/products-pricelist.entity';
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

@Entity({ name: 'product_pricelist_item' })
export class ProductPricelistItem {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  //Muchos a Uno
  @ManyToOne(() => Products, (product) => product.pricelistItems)
  @JoinColumn({ name: 'product_id' })
  public product: Products;

  @Column({ name: 'pricelist_id', type: 'int' })
  public pricelist_id: number;

  //Muchos a Uno
  @ManyToOne(() => ProductsPricelist, (pricelist) => pricelist.pricelistItems)
  @JoinColumn({ name: 'pricelist_id' })
  public pricelist: ProductsPricelist;

  @Column({ name: 'fixed_price', type: 'float' })
  public fixed_price: number;

  @Column({ name: 'percent_price', type: 'float' })
  public percent_price: number;

  @Column({ name: 'price', type: 'float' })
  public price: number;

  @Column({ name: 'discount', type: 'float' })
  public discount: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductPricelistItem>) {
    Object.assign(this, data);
  }
}
