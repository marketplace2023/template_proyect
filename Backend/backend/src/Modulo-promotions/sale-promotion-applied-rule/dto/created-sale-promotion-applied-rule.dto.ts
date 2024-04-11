import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSalePromotionAppliedRuleDto {
  @Expose()
  public id: number;

  @Expose()
  public promotion_id: number;

  @Expose()
  public sale_order_id: number;

  @Expose()
  public cart_rule_id: number;

  @Expose()
  public product_rule_ids: number;

  @Expose()
  public category_rule_ids: number;

  @Expose()
  public customer_rule_ids: number;

  @Expose()
  public discount_id: number;
}
