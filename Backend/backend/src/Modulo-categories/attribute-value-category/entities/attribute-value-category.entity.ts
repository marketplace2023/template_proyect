import { ProductCategoryImage } from 'src/Modulo-categories/product-category-image/entities/product-category-image.entity';
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

@Entity({ name: 'attribute_value_category' })
export class AttributeValueCategory {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'parent_id', type: 'int' })
  public parent_id: number;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'color', type: 'varchar' })
  public color: string;

  //----------------------------------------------------------
  // Mucho a uno con attributeValueCateegory
  @Column({ name: 'product_category_image_id', type: 'int' })
  public product_category_image_id: number;

  @ManyToOne(
    () => ProductCategoryImage,
    (productCategoryImage) => productCategoryImage.attributeValueCategorys,
  )
  @JoinColumn({ name: 'product_category_image_id' })
  public productCategoryImages: ProductCategoryImage;
  //----------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AttributeValueCategory>) {
    Object.assign(this, data);
  }
}
