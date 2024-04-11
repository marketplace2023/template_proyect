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

@Entity({ name: 'sale_promotion_category_rule' })
export class SalePromotionCategoryRule {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'promotion_rule_id', type: 'int' })
  public promotion_rule_id: number;

  //--------------------------------------------------------------------
  @ManyToOne(
    () => SaleCoupon,
    (saleCoupon) => saleCoupon.promotionCategoryRules,
  )
  @JoinColumn({ name: 'promotion_rule_id' })
  public saleCoupons: SaleCoupon;

  //Uno a Mucho salePromotionAppliedRule
  @OneToMany(
    () => SalePromotionAppliedRule,
    (promotionAppliedRule) => promotionAppliedRule.salePromotionCategoryRules,
  )
  public promotionAppliedRules: SalePromotionAppliedRule;
  //---------------------------------------------------------------------

  @Column({ name: 'category_id', type: 'int' })
  public category_id: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SalePromotionCategoryRule>) {
    Object.assign(this, data);
  }
}
