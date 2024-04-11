import { PosCategory } from 'src/Modulo-categories/pos-category/entities/pos-category.entity';
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

@Entity({ name: 'hr_employee_category' })
export class HrEmployeeCategory {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'color', type: 'int' })
  public color: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  public name: string;

  //----------------------------------------------------------------
  // Mucho a uno con posCategory
  @Column({ name: 'posCategory_id', type: 'int' })
  public posCategory_id: number;

  //Muchos a Uno
  @ManyToOne(
    () => PosCategory,
    (posCategory) => posCategory.hrEmployeeCategorys,
  )
  @JoinColumn({ name: 'posCategory_id' })
  public posCategory: PosCategory;

  @Column({ name: 'productPublicCategory_id', type: 'int' })
  public productPublicCategory_id: number;

  //Muchos a Uno
  @ManyToOne(
    () => ProductPublicCategory,
    (productPublicCategory) => productPublicCategory.hrEmployeeCategorys,
  )
  @JoinColumn({ name: 'productPublicCategory_id' })
  public productPublicCategory: ProductPublicCategory;
  //----------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<HrEmployeeCategory>) {
    Object.assign(this, data);
  }
}
