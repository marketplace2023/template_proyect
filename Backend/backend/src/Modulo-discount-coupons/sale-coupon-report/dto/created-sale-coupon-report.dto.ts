import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSaleCouponReportDto {
  @Expose()
  public id: number;

  @Expose()
  public coupon_id: number;

  @Expose()
  public order_id: number;

  @Expose()
  public customer_id: number;

  @Expose()
  public date_used: Date;

  @Expose()
  public amount_discounted: number;

  @Expose()
  public is_valid: boolean;

  @Expose()
  public product_ids: number;

  @Expose()
  public category_ids: number;

  @Expose()
  public total_order_amount: number;

  @Expose()
  public discounted_order_amount: number;
}
