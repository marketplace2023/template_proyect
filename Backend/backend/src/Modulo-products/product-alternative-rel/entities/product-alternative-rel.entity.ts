import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
import { ResUsers } from 'src/Modulo-users/res-users/entities/res-users.entity';
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

@Entity({ name: 'product_alternative_rel' })
export class ProductAlternativeRel {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'product_tmpl_id', type: 'int' })
  public product_tmpl_id: number;

  //Muchos a Uno ProductsTemplate
  @ManyToOne(() => ProductsTemplate, (template) => template.alternativeRels)
  @JoinColumn({ name: 'product_tmpl_id' })
  public template: ProductsTemplate;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductAlternativeRel>) {
    Object.assign(this, data);
  }
}
