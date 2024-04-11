import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
import { Products } from 'src/Modulo-products/products/entities/products.entity';
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

@Entity({ name: 'product_accessory_rel' })
export class ProductAccessoryRel {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'product_tmpl_id', type: 'int' })
  public product_tmpl_id: number;

  //Muchos a Uno ProductsTemplate
  @ManyToOne(() => ProductsTemplate, (template) => template.accessoryRels)
  @JoinColumn({ name: 'product_tmpl_id' })
  public template: ProductsTemplate;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  //Muchos a Uno ProductsTemplate
  @ManyToOne(() => Products, (product) => product.accessoryRels)
  @JoinColumn({ name: 'product_id' })
  public product: Products;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductAccessoryRel>) {
    Object.assign(this, data);
  }
}
