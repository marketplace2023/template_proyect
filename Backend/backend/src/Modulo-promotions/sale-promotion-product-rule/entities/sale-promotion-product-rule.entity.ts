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

@Entity({ name: 'sale_promotion_product_rule' })
export class SalePromotionProductRule {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'promotion_rule_id', type: 'int' })
  public promotion_rule_id: number;

  //--------------------------------------------------------------------
  @ManyToOne(() => SaleCoupon, (saleCoupon) => saleCoupon.promotionProductRules)
  @JoinColumn({ name: 'promotion_rule_id' })
  public saleCoupons: SaleCoupon;
  //---------------------------------------------------------------------

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Column({ name: 'quantity', type: 'int' })
  public quantity: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SalePromotionProductRule>) {
    Object.assign(this, data);
  }
}
