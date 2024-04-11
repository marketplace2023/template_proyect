import { AttributeValueCategory } from 'src/Modulo-categories/attribute-value-category/entities/attribute-value-category.entity';
import { CategoryImageGallery } from 'src/Modulo-categories/category-image-gallery/entities/category-image-gallery.entity';
import { PosCategory } from 'src/Modulo-categories/pos-category/entities/pos-category.entity';
import { ProductPublicCategory } from 'src/Modulo-categories/product-public-category/entities/product-category-public.entity';
import { StockStorageCategoryCapacity } from 'src/Modulo-categories/stock-storage-category-capacity/entities/stock-storage-category-capacity.entity';
import { StockStorageCategory } from 'src/Modulo-categories/stock-storage-category/entities/stock-storage-category.entity';
import { ProductsCategory } from 'src/Modulo-products/products-category/entities/products-category.entity';
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

@Entity({ name: 'product_category_image' })
export class ProductCategoryImage {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'product_category_id', type: 'int' })
  public product_category_id: number;

  @Column({ name: 'image', type: 'varchar' })
  public image: string;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  //----------------------------------------------------------------
  // Mucho a uno con posCategory
  @Column({ name: 'posCategory_id', type: 'int' })
  public posCategory_id: number;

  //Muchos a Uno
  @ManyToOne(
    () => PosCategory,
    (posCategory) => posCategory.productCategoryImages,
  )
  @JoinColumn({ name: 'posCategory_id' })
  public posCategorys: PosCategory;
  //-------------------------------------------------------
  @Column({ name: 'productPublicCategory_id', type: 'int' })
  public productPublicCategory_id: number;

  //Muchos a Uno
  @ManyToOne(
    () => ProductPublicCategory,
    (productPublicCategory) => productPublicCategory.productCategoryImages,
  )
  @JoinColumn({ name: 'productPublicCategory_id' })
  public productPublicCategory: ProductPublicCategory;
  //----------------------------------------------------------
  // Mucho a uno con stockStorageCategory
  @Column({ name: 'stockStorage_id', type: 'int' })
  public stockStorage_id: number;

  @ManyToOne(
    () => StockStorageCategory,
    (stockStorageCategory) => stockStorageCategory.productCategoryImages,
  )
  @JoinColumn({ name: 'stockStorage_id' })
  public stockStorageCategorys: StockStorageCategory;
  //----------------------------------------------------------------
  //uno a mucho ProductsCategory
  @OneToMany(
    () => ProductsCategory,
    (productsCategory) => productsCategory.productCategoryImages,
  )
  public productsCategorys: ProductsCategory;

  //uno a mucho attributeValueCategory
  @OneToMany(
    () => AttributeValueCategory,
    (attributeValueCategory) => attributeValueCategory.productCategoryImages,
  )
  public attributeValueCategorys: AttributeValueCategory;

  //uno a mucho CategoryImageGallery
  @OneToMany(
    () => CategoryImageGallery,
    (categoryImageGallery) => categoryImageGallery.productCategoryImages,
  )
  public categoryImageGallerys: CategoryImageGallery;
  //----------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductCategoryImage>) {
    Object.assign(this, data);
  }
}
