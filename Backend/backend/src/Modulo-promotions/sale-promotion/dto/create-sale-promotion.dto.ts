import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSalePromotionDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public active: boolean;

  @Expose()
  public date_start: Date;

  @Expose()
  public date_end: Date;

  @Expose()
  public promo_type: number;

  @Expose()
  public promo_applicability: number;

  @Expose()
  public minimum_amount: number;

  @Expose()
  public discount_type: number;

  @Expose()
  public discount_percentage: number;

  @Expose()
  public discount_fixed_amount: number;

  @Expose()
  public rule_min_amount: number;

  @Expose()
  public rule_products_domain: number;

  @Expose()
  public total_used: number;

  @Expose()
  public coupon_program_ids: number;
}
