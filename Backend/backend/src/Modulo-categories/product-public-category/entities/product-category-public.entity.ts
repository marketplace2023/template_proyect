import { HrEmployeeCategory } from 'src/Modulo-categories/hr-employee-category/entities/hr-employee-category.entity';
import { ProductCategoryImage } from 'src/Modulo-categories/product-category-image/entities/product-category-image.entity';
import { UomCategory } from 'src/Modulo-categories/uom-category/entities/uom-category-entity';
import { ProductsCategory } from 'src/Modulo-products/products-category/entities/products-category.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'product_public_category' })
export class ProductPublicCategory {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'website_id', type: 'int' })
  public website_id: number;

  @Column({ name: 'parent_id', type: 'int' })
  public parent_id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'website_meta_og_img', type: 'int' })
  public website_meta_og_img: number;

  @Column({ name: 'parent_path', type: 'int' })
  public parent_path: number;

  @Column({ name: 'website_meta_title', type: 'varchar' })
  public website_meta_title: string;

  @Column({ name: 'website_meta_description', type: 'varchar' })
  public website_meta_description: string;

  @Column({ name: 'website_meta_keywords', type: 'varchar' })
  public website_meta_keywords: string;

  @Column({ name: 'seo_name', type: 'varchar' })
  public seo_name: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'website_description', type: 'varchar' })
  public website_description: string;

  //----------------RELACION--------------------------------
  //uno a mucho product.category
  @OneToMany(
    () => ProductsCategory,
    (productsCategory) => productsCategory.productPublicCategory,
  )
  public productsCategorys: ProductsCategory;

  //uno a mucho ProductCategoryImage
  @OneToMany(
    () => ProductCategoryImage,
    (productCategoryImage) => productCategoryImage.productPublicCategory,
  )
  public productCategoryImages: ProductCategoryImage;

  //uno a mucho hr-employee-category
  @OneToMany(
    () => HrEmployeeCategory,
    (hrEmployeeCategory) => hrEmployeeCategory.productPublicCategory,
  )
  public hrEmployeeCategorys: HrEmployeeCategory;

  //uno a mucho uom.category
  @OneToMany(
    () => UomCategory,
    (uomCategory) => uomCategory.productPublicCategory,
  )
  public uomCategorys: UomCategory;

  //--------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductPublicCategory>) {
    Object.assign(this, data);
  }
}
