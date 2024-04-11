import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateDiscountCouponLineDto {
  @Expose()
  public id: number;

  @Expose()
  public discount_coupon_id: number;

  @Expose()
  public discount_rule_id: number;

  @Expose()
  public sequence: number;
}
