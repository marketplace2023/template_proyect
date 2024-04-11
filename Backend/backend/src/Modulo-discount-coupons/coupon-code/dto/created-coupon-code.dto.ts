import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateCouponCodeDto {
  @Expose()
  public id: number;

  @Expose()
  public code: string;

  @Expose()
  public discount_coupon_id: number;

  @Expose()
  public status: string;
}
