import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSalePromotionProductRuleDto {
  @Expose()
  public id: number;

  @Expose()
  public promotion_rule_id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public quantity: number;
}
