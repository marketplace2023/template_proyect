import { CategoryDescription } from 'src/Modulo-categories/category-description/entities/category-description.entity';
import { CategoryImageGallery } from 'src/Modulo-categories/category-image-gallery/entities/category-image-gallery.entity';
import { CrmTagCategory } from 'src/Modulo-categories/crm-tag-category/entities/crm-tag-category.entity';
import { ProductAttributeCategory } from 'src/Modulo-categories/product-attribute-category/entities/product-attribute-category.entity';
import { ProductCategoryImage } from 'src/Modulo-categories/product-category-image/entities/product-category-image.entity';
import { SaleOrderCategory } from 'src/Modulo-categories/sale-order-category/entities/sale-order-category.entity';
import { ProductsCategory } from 'src/Modulo-products/products-category/entities/products-category.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'purchase_order_category' })
export class PurchaseOrderCategory {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'parent_id', type: 'int' })
  public parent_id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'color', type: 'varchar' })
  public color: string;

  @Column({ name: 'icon', type: 'varchar' })
  public icon: string;

  @Column({ name: 'website_published', type: 'tinyint' })
  public website_published: boolean;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  //------------------------------------------------------------
  //Muchos a Muchos productCategory
  @ManyToMany(() => ProductsCategory, { cascade: true })
  @JoinTable({
    name: 'products_category_purchase_order_category',
    joinColumn: { name: 'purchase_order_category_id' },
    inverseJoinColumn: { name: 'products_category_id' },
  })
  public productsCategorys: ProductsCategory[];

  //Muchos a Muchos producAttributeCategory
  @ManyToMany(() => ProductAttributeCategory, { cascade: true })
  @JoinTable({
    name: 'products_attribute_category_purchase_order_category',
    joinColumn: { name: 'purchase_order_category_id' },
    inverseJoinColumn: { name: 'products_attribute_category_id' },
  })
  public productAttributeCategorys: ProductAttributeCategory[];

  //Muchos a Muchos producCategoryImage
  @ManyToMany(() => ProductCategoryImage, { cascade: true })
  @JoinTable({
    name: 'products_category_image_purchase_order_category',
    joinColumn: { name: 'purchase_order_category_id' },
    inverseJoinColumn: { name: 'products_attribute_category_id' },
  })
  public productCategoryImages: ProductCategoryImage[];

  //Muchos a Muchos CategoryDescription
  @ManyToMany(() => CategoryDescription, { cascade: true })
  @JoinTable({
    name: 'category_description_purchase_order_category',
    joinColumn: { name: 'purchase_order_category_id' },
    inverseJoinColumn: { name: 'category_description_id' },
  })
  public categoryDescription: CategoryDescription[];

  //Muchos a Muchos CategoryImgeGallery
  @ManyToMany(() => CategoryImageGallery, { cascade: true })
  @JoinTable({
    name: 'category_image_gallery_purchase_order_category',
    joinColumn: { name: 'purchase_order_category_id' },
    inverseJoinColumn: { name: 'category_image_gallery_id' },
  })
  public categoryImageGallery: CategoryImageGallery[];

  //Muchos a Muchos CrmTagCategory
  @ManyToMany(() => CrmTagCategory, { cascade: true })
  @JoinTable({
    name: 'crm_tag_category_purchase_order_category',
    joinColumn: { name: 'purchase_order_category_id' },
    inverseJoinColumn: { name: 'crm_tag_category_id' },
  })
  public crmTagCategory: CrmTagCategory[];

  //Muchos a Muchos SaleOrderCategory
  @ManyToMany(() => SaleOrderCategory, { cascade: true })
  @JoinTable({
    name: 'sale_oder_category_purchase_order_category',
    joinColumn: { name: 'purchase_order_category_id' },
    inverseJoinColumn: { name: 'sale_oder_category_id' },
  })
  public saleOrderCategory: SaleOrderCategory[];
  //------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<PurchaseOrderCategory>) {
    Object.assign(this, data);
  }
}
