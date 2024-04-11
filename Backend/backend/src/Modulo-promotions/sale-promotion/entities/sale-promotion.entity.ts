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

@Entity({ name: 'sale_promotion' })
export class SalePromotion {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'date_start', type: 'date' })
  public date_start: Date;

  @Column({ name: 'date_end', type: 'date' })
  public date_end: Date;

  @Column({ name: 'promo_type', type: 'int' })
  public promo_type: number;

  @Column({ name: 'promo_applicability', type: 'int' })
  public promo_applicability: number;

  @Column({ name: 'minimum_amount', type: 'int' })
  public minimum_amount: number;

  @Column({ name: 'discount_type', type: 'int' })
  public discount_type: number;

  @Column({ name: 'discount_percentage', type: 'int' })
  public discount_percentage: number;

  @Column({ name: 'discount_fixed_amount', type: 'int' })
  public discount_fixed_amount: number;

  @Column({ name: 'rule_min_amount', type: 'int' })
  public rule_min_amount: number;

  @Column({ name: 'rule_products_domain', type: 'int' })
  public rule_products_domain: number;

  @Column({ name: 'total_used', type: 'int' })
  public total_used: number;

  @Column({ name: 'coupon_program_ids', type: 'int' })
  public coupon_program_ids: number;

  //--------------------------------------------------------------------
  @ManyToOne(() => SaleCoupon, (saleCoupon) => saleCoupon.Coupons)
  @JoinColumn({ name: 'coupon_program_ids' })
  public saleCoupons: SaleCoupon;
  //---------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SalePromotion>) {
    Object.assign(this, data);
  }
}
