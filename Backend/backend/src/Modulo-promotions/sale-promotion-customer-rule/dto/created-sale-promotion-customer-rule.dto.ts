import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSalePromotionCustomerRuleDto {
  @Expose()
  public id: number;

  @Expose()
  public promotion_rule_id: number;

  @Expose()
  public customer_group_id: number;
}
