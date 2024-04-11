import { SaleCoupon } from 'src/Modulo-promotions/sale-coupon/entities/sale-coupon.entity';
import { SalePromotionCategoryRule } from 'src/Modulo-promotions/sale-promotion-category-rule/entities/sale-promotion-category-rule.entity';
import { SalePromotionCustomerRule } from 'src/Modulo-promotions/sale-promotion-customer-rule/entities/sale-promotion-customer-rule.entity';
import { SalePromotionRule } from 'src/Modulo-promotions/sale-promotion-rule/entities/sale-promotion-rule.entity';
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

@Entity({ name: 'sale_promotion_applied_rule' })
export class SalePromotionAppliedRule {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'promotion_id', type: 'int' })
  public promotion_id: number;

  @Column({ name: 'sale_order_id', type: 'int' })
  public sale_order_id: number;

  @Column({ name: 'cart_rule_id', type: 'int' })
  public cart_rule_id: number;

  @Column({ name: 'product_rule_ids', type: 'int' })
  public product_rule_ids: number;

  //--------------------------------------------------------------------
  @ManyToOne(
    () => SalePromotionRule,
    (salePromotionRule) => salePromotionRule.promotionAppliedRules,
  )
  @JoinColumn({ name: 'product_rule_ids' })
  public salePromotionRules: SalePromotionRule;
  //---------------------------------------------------------------------

  @Column({ name: 'category_rule_ids', type: 'int' })
  public category_rule_ids: number;

  //--------------------------------------------------------------------
  @ManyToOne(
    () => SalePromotionCategoryRule,
    (salePromotionCategoryRule) =>
      salePromotionCategoryRule.promotionAppliedRules,
  )
  @JoinColumn({ name: 'category_rule_ids' })
  public salePromotionCategoryRules: SalePromotionCategoryRule;
  //---------------------------------------------------------------------

  @Column({ name: 'customer_rule_ids', type: 'int' })
  public customer_rule_ids: number;

  @ManyToOne(
    () => SalePromotionCustomerRule,
    (salePromotionCustomerRule) =>
      salePromotionCustomerRule.promotionAppliedRuless,
  )
  @JoinColumn({ name: 'customer_rule_ids' })
  public salePromotionCustomerRules: SalePromotionCustomerRule;

  @Column({ name: 'discount_id', type: 'int' })
  public discount_id: number;

  //--------------------------------------------------------------------
  @ManyToOne(() => SaleCoupon, (saleCoupon) => saleCoupon.promotionAppliedRules)
  @JoinColumn({ name: 'discount_id' })
  public saleCoupons: SaleCoupon;
  //---------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SalePromotionAppliedRule>) {
    Object.assign(this, data);
  }
}
