import { StockStorageCategory } from 'src/Modulo-categories/stock-storage-category/entities/stock-storage-category.entity';
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

@Entity({ name: 'stock_storage_category_capacity' })
export class StockStorageCategoryCapacity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'storage_category_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Column({ name: 'package_type_id', type: 'int' })
  public package_type_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'quantity', type: 'int' })
  public quantity: number;
  //----------------------------------------------------------------------
  //uno a mucho product.category
  @OneToMany(
    () => StockStorageCategory,
    (stockStorageCategory) =>
      stockStorageCategory.stockStorageCategoryCapacitys,
  )
  public stockStorageCategorys: StockStorageCategory;

  //------------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockStorageCategoryCapacity>) {
    Object.assign(this, data);
  }
}
