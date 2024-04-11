import { Products } from 'src/Modulo-products/products/entities/products.entity';
import { AccountMove } from 'src/Modulo-store/account-move/entities/account-move.entity';
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

@Entity({ name: 'product_product_template' })
export class ProductProductTemplate {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'category_id', type: 'int' })
  public category_id: number;

  @Column({ name: 'marketplace_shop_id', type: 'int' })
  public marketplace_shop_id: number;

  @Column({ name: 'price', type: 'float' })
  public price: number;

  @Column({ name: 'image', type: 'int' })
  public image: number;

  @Column({ name: 'stock', type: 'int' })
  public stock: number;

  @Column({ name: 'weight', type: 'int' })
  public weight: number;

  @Column({ name: 'dimensions', type: 'varchar' })
  public dimensions: string;

  @Column({ name: 'available_in_stock', type: 'tinyint' })
  public available_in_stock: boolean;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'sale_ok', type: 'tinyint' })
  public sale_ok: boolean;

  @Column({ name: 'purchase_ok', type: 'tinyint' })
  public purchase_ok: boolean;

  @Column({ name: 'variant_ids', type: 'int' })
  public variant_ids: number;

  //------------------tienda-----------------------
  //Uno a Mucho accountMove --  productProductTemplate
  @OneToMany(
    () => AccountMove,
    (accountMove) => accountMove.productProductTemplates,
  )
  public accountMoves: AccountMove;

  //-------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductProductTemplate>) {
    Object.assign(this, data);
  }
}
