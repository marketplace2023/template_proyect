import { PosCategory } from 'src/Modulo-categories/pos-category/entities/pos-category.entity';
import { ProductCategoryImage } from 'src/Modulo-categories/product-category-image/entities/product-category-image.entity';
import { ProductPublicCategory } from 'src/Modulo-categories/product-public-category/entities/product-category-public.entity';
import { SaleOrder } from 'src/Modulo-store/sale-order/entities/sale-order.entity';
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

@Entity({ name: 'products-category' })
export class ProductsCategory {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'parent_id', type: 'int' })
  public parent_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: String;

  @Column({ name: 'complete_name', type: 'varchar' })
  public complete_name: string;

  @Column({ name: 'parent_path', type: 'varchar' })
  public parent_path: string;

  @Column({ name: 'removal_strategy_id', type: 'int' })
  public removal_strategy_id: number;

  @Column({ name: 'packaging_reserve_method', type: 'varchar' })
  public packaging_reserve_method: string;

  //--------------------------------------------------------------------
  @Column({ name: 'productsCategory_id', type: 'int' })
  public productsCategory_id: number;

  @ManyToOne(() => SaleOrder, (saleOrder) => saleOrder.productCategorys)
  @JoinColumn({ name: 'productsCategory_id' })
  public saleOrder: SaleOrder;

  //----------------------------------------------------------------
  // Mucho a uno con posCategory
  @Column({ name: 'posCategory_id', type: 'int' })
  public posCategory_id: number;

  //Muchos a Uno
  @ManyToOne(() => PosCategory, (posCategory) => posCategory.productsCategorys)
  @JoinColumn({ name: 'posCategory_id' })
  public posCategorys: PosCategory;

  @Column({ name: 'productPublicCategory_id', type: 'int' })
  public productPublicCategory_id: number;

  //Muchos a Uno
  @ManyToOne(
    () => ProductPublicCategory,
    (productPublicCategory) => productPublicCategory.productsCategorys,
  )
  @JoinColumn({ name: 'productPublicCategory_id' })
  public productPublicCategory: ProductPublicCategory;
  //---------------------------------------------------------------------
  // Mucho a uno con productCategory
  @Column({ name: 'productCategory_id', type: 'int' })
  public productCategory_id: number;

  @ManyToOne(
    () => ProductCategoryImage,
    (productCategoryImage) => productCategoryImage.productsCategorys,
  )
  @JoinColumn({ name: 'productCategory_id' })
  public productCategoryImages: ProductCategoryImage;
  //-----------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductsCategory>) {
    Object.assign(this, data);
  }
}
