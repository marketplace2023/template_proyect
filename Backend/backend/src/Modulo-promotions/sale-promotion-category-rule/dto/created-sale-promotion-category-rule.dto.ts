import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSalePromotionCategoryRuleDto {
  @Expose()
  public id: number;

  @Expose()
  public promotion_rule_id: number;

  @Expose()
  public category_id: number;
}
