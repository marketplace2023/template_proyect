import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSalePromotionRuleDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public sequence: number;

  @Expose()
  public promotion_id: number;

  @Expose()
  public discount_type: number;

  @Expose()
  public discount_percentage: number;

  @Expose()
  public discount_fixed_amount: number;

  @Expose()
  public rule_min_quantity: number;

  @Expose()
  public rule_min_amount: number;

  @Expose()
  public rule_products_domain: number;

  @Expose()
  public active: boolean;
}
