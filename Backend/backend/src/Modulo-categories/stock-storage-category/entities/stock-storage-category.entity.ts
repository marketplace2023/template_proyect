import { ProductCategoryImage } from 'src/Modulo-categories/product-category-image/entities/product-category-image.entity';
import { StockStorageCategoryCapacity } from 'src/Modulo-categories/stock-storage-category-capacity/entities/stock-storage-category-capacity.entity';
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

@Entity({ name: 'stock_storage_category' })
export class StockStorageCategory {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'allow_new_product', type: 'varchar' })
  public allow_new_product: string;

  @Column({ name: 'max_weight', type: 'int' })
  public max_weight: number;

  //-----------------------relaciones--------------------------
  // Mucho a uno con posCategory
  @Column({ name: 'stockStorage_id', type: 'int' })
  public stockStorage_id: number;

  //Muchos a Uno StockStorageCategoryCapacity
  @ManyToOne(
    () => StockStorageCategoryCapacity,
    (stockStorageCategoryCapacity) =>
      stockStorageCategoryCapacity.stockStorageCategorys,
  )
  @JoinColumn({ name: 'stockStorage_id' })
  public stockStorageCategoryCapacitys: StockStorageCategoryCapacity;

  //uno a mucho ProductCategoryImage
  @OneToMany(
    () => ProductCategoryImage,
    (productCategoryImage) => productCategoryImage.stockStorageCategorys,
  )
  public productCategoryImages: ProductCategoryImage;

  //----------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockStorageCategory>) {
    Object.assign(this, data);
  }
}
