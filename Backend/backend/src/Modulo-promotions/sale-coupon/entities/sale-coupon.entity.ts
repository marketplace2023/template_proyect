import { SaleCouponProgramLine } from 'src/Modulo-promotions/sale-coupon-program-line/entities/sale-coupon-program-line.entity';
import { SaleCouponProgram } from 'src/Modulo-promotions/sale-coupon-program/entities/sale-coupon-program.entity';
import { SalePromotionAppliedRule } from 'src/Modulo-promotions/sale-promotion-applied-rule/entities/sale-promotion-applied-rule.entity';
import { SalePromotionCartRule } from 'src/Modulo-promotions/sale-promotion-cart-rule/entities/sale-promotion-cart-rule.entity';
import { SalePromotionCategoryRule } from 'src/Modulo-promotions/sale-promotion-category-rule/entities/sale-promotion-category-rule.entity';
import { SalePromotionCategory } from 'src/Modulo-promotions/sale-promotion-category/entities/sale-promotion-category.entity';
import { SalePromotionCustomerRule } from 'src/Modulo-promotions/sale-promotion-customer-rule/entities/sale-promotion-customer-rule.entity';
import { SalePromotionProductRule } from 'src/Modulo-promotions/sale-promotion-product-rule/entities/sale-promotion-product-rule.entity';
import { SalePromotionRule } from 'src/Modulo-promotions/sale-promotion-rule/entities/sale-promotion-rule.entity';
import { SalePromotion } from 'src/Modulo-promotions/sale-promotion/entities/sale-promotion.entity';
import { StockPicking } from 'src/Modulo-store/stock-picking/entities/stock-picking.entity';
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

@Entity({ name: 'sale_coupon' })
export class SaleCoupon {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'code', type: 'int' })
  public code: number;

  @Column({ name: 'program_id', type: 'int' })
  public program_id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'discount_type', type: 'int' })
  public discount_type: number;

  @Column({ name: 'discount_percentage', type: 'int' })
  public discount_percentage: number;

  @Column({ name: 'discount_fixed_amount', type: 'int' })
  public discount_fixed_amount: number;

  @Column({ name: 'discount_apply_on', type: 'int' })
  public discount_apply_on: number;

  @Column({ name: 'minimum_amount', type: 'int' })
  public minimum_amount: number;

  @Column({ name: 'expiration_date', type: 'varchar' })
  public expiration_date: Date;

  @Column({ name: 'usage_limit', type: 'int' })
  public usage_limit: number;

  @Column({ name: 'total_used', type: 'int' })
  public total_used: number;

  @Column({ name: 'order_ids', type: 'int' })
  public order_ids: number;

  //relaciones de tienda
  @Column({ name: 'stockpline_id', type: 'int' })
  public stockpline_id: number;

  @ManyToOne(() => StockPicking, (stockPicking) => stockPicking.saleCoupons)
  @JoinColumn({ name: 'stockpline_id' })
  public stockPickings: StockPicking;
  //------------------relaciones de promotion----------------------
  //Uno a Mucho saleCouponProgram
  @OneToMany(
    () => SaleCouponProgram,
    (CouponProgram) => CouponProgram.saleCoupons,
  )
  public CouponPrograms: SaleCouponProgram;

  //Uno a Mucho saleCouponProgramLine
  @OneToMany(
    () => SaleCouponProgramLine,
    (CouponProgramLine) => CouponProgramLine.saleCoupons,
  )
  public CouponProgramLines: SaleCouponProgramLine;

  //Uno a Mucho salePromotion
  @OneToMany(() => SalePromotion, (Coupon) => Coupon.saleCoupons)
  public Coupons: SalePromotion;

  //Uno a Mucho salePromotionRule
  @OneToMany(
    () => SalePromotionRule,
    (promotionRule) => promotionRule.saleCoupons,
  )
  public promotionRules: SalePromotionRule;

  //Uno a Mucho salePromotionProductRule
  @OneToMany(
    () => SalePromotionProductRule,
    (promotionProductRule) => promotionProductRule.saleCoupons,
  )
  public promotionProductRules: SalePromotionProductRule;

  //Uno a Mucho salePromotionCategoryRule
  @OneToMany(
    () => SalePromotionCategoryRule,
    (promotionCategoryRule) => promotionCategoryRule.saleCoupons,
  )
  public promotionCategoryRules: SalePromotionCategoryRule;

  //Uno a Mucho salePromotionCustomerRule
  @OneToMany(
    () => SalePromotionCustomerRule,
    (promotionCustomerRule) => promotionCustomerRule.saleCoupons,
  )
  public promotionCustomerRules: SalePromotionCustomerRule;

  //Uno a Mucho salePromotionCartRule
  @OneToMany(
    () => SalePromotionCartRule,
    (promotionCartRule) => promotionCartRule.saleCoupons,
  )
  public promotionCartRules: SalePromotionCartRule;

  //Uno a Mucho salePromotionAppliedRule
  @OneToMany(
    () => SalePromotionAppliedRule,
    (promotionAppliedRule) => promotionAppliedRule.saleCoupons,
  )
  public promotionAppliedRules: SalePromotionAppliedRule;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SaleCoupon>) {
    Object.assign(this, data);
  }
}
