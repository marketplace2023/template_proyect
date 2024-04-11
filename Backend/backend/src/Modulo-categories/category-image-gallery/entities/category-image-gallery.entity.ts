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

@Entity({ name: 'category_imagen_gallery' })
export class CategoryImageGallery {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'category_id', type: 'int' })
  public category_id: number;

  @Column({ name: 'image', type: 'varchar' })
  public image: string;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'website_published', type: 'tinyint' })
  public website_published: boolean;

  //----------------------------------------------------------
  // Mucho a uno con ProductCategoryImage
  @Column({ name: 'product_category_image_id', type: 'int' })
  public product_category_image_id: number;

  @ManyToOne(
    () => ProductCategoryImage,
    (productCategoryImage) => productCategoryImage.categoryImageGallerys,
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

  constructor(data: Partial<CategoryImageGallery>) {
    Object.assign(this, data);
  }
}
