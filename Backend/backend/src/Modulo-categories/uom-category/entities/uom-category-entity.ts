import { ProductPublicCategory } from 'src/Modulo-categories/product-public-category/entities/product-category-public.entity';
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

@Entity({ name: 'uom_category' })
export class UomCategory {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'is_pos_groupable', type: 'tinyint' })
  public is_pos_groupable: Boolean;

  @Column({ name: 'productPublicCategory_id', type: 'int' })
  public productPublicCategory_id: number;

  //Muchos a Uno
  @ManyToOne(
    () => ProductPublicCategory,
    (productPublicCategory) => productPublicCategory.uomCategorys,
  )
  @JoinColumn({ name: 'productPublicCategory_id' })
  public productPublicCategory: ProductPublicCategory;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<UomCategory>) {
    Object.assign(this, data);
  }
}
