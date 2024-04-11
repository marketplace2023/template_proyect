import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateDiscountCouponHistoryDto {
  @Expose()
  public id: number;

  @Expose()
  public discount_coupon_id: number;

  @Expose()
  public order_id: number;

  @Expose()
  public amount_discount: number;

  @Expose()
  public date: Date;
}
