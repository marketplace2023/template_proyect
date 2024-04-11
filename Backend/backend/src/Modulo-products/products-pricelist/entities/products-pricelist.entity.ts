import { ProductPricelistItem } from 'src/Modulo-products/product-pricelist-item/entities/product-pricelist-item.entity';
import { SaleOrder } from 'src/Modulo-store/sale-order/entities/sale-order.entity';
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

@Entity({ name: 'products-princelist' })
export class ProductsPricelist {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'discount_policy', type: 'varchar' })
  public discount_policy: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  //Uno a Mucho ProductPricelistItem
  @OneToMany(
    () => ProductPricelistItem,
    (productPricelistItem) => productPricelistItem.pricelist,
  )
  public pricelistItems: ProductPricelistItem[];

  //--------------------------------------------------------------------
  @Column({ name: 'productsPricelist_id', type: 'int' })
  public productsPricelist_id: number;

  @ManyToOne(() => SaleOrder, (saleOrder) => saleOrder.productsPricelists)
  @JoinColumn({ name: 'productsPricelist_id' })
  public saleOrder: SaleOrder;
  //---------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductsPricelist>) {
    Object.assign(this, data);
  }
}
