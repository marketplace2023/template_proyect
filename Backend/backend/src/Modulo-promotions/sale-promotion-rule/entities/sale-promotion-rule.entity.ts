import { SaleCoupon } from 'src/Modulo-promotions/sale-coupon/entities/sale-coupon.entity';
import { SalePromotionAppliedRule } from 'src/Modulo-promotions/sale-promotion-applied-rule/entities/sale-promotion-applied-rule.entity';
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

@Entity({ name: 'sale_promotion_rule' })
export class SalePromotionRule {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'promotion_id', type: 'int' })
  public promotion_id: number;

  //--------------------------------------------------------------------
  @ManyToOne(() => SaleCoupon, (saleCoupon) => saleCoupon.promotionRules)
  @JoinColumn({ name: 'promotion_id' })
  public saleCoupons: SaleCoupon;

  //Uno a Mucho salePromotionAppliedRule
  @OneToMany(
    () => SalePromotionAppliedRule,
    (promotionAppliedRule) => promotionAppliedRule.saleCoupons,
  )
  public promotionAppliedRules: SalePromotionAppliedRule;
  //---------------------------------------------------------------------
  @Column({ name: 'discount_type', type: 'int' })
  public discount_type: number;

  @Column({ name: 'discount_percentage', type: 'int' })
  public discount_percentage: number;

  @Column({ name: 'discount_fixed_amount', type: 'int' })
  public discount_fixed_amount: number;

  @Column({ name: 'rule_min_quantity', type: 'int' })
  public rule_min_quantity: number;

  @Column({ name: 'rule_min_amount', type: 'int' })
  public rule_min_amount: number;

  @Column({ name: 'rule_products_domain', type: 'int' })
  public rule_products_domain: number;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SalePromotionRule>) {
    Object.assign(this, data);
  }
}
