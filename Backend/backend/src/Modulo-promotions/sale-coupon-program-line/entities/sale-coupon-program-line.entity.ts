import { SaleCoupon } from 'src/Modulo-promotions/sale-coupon/entities/sale-coupon.entity';
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

@Entity({ name: 'sale_coupon_program_line' })
export class SaleCouponProgramLine {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'program_id', type: 'int' })
  public program_id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Column({ name: 'product_category_id', type: 'int' })
  public product_category_id: number;

  @Column({ name: 'product_tmpl_id', type: 'int' })
  public product_tmpl_id: number;

  @Column({ name: 'product_variant_ids', type: 'int' })
  public product_variant_ids: number;

  @Column({ name: 'product_uom_id', type: 'int' })
  public product_uom_id: number;

  @Column({ name: 'price_discount', type: 'int' })
  public price_discount: number;

  @Column({ name: 'discount_type', type: 'int' })
  public discount_type: number;

  @Column({ name: 'rule_min_quantity', type: 'int' })
  public rule_min_quantity: number;

  @Column({ name: 'rule_min_amount', type: 'int' })
  public rule_min_amount: number;

  @Column({ name: 'coupon_ids', type: 'int' })
  public coupon_ids: number;

  //--------------------------------------------------------------------
  @ManyToOne(() => SaleCoupon, (saleCoupon) => saleCoupon.CouponProgramLines)
  @JoinColumn({ name: 'coupon_ids' })
  public saleCoupons: SaleCoupon;
  //---------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SaleCouponProgramLine>) {
    Object.assign(this, data);
  }
}
