import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSalePromotionCartRuleDto {
  @Expose()
  public id: number;

  @Expose()
  public promotion_rule_id: number;

  @Expose()
  public cart_id: number;
}
