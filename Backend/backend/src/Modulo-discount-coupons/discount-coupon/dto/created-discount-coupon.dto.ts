import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateDiscountCouponDto {
  @Expose()
  public id: number;

  @Expose()
  public code: number;

  @Expose()
  public type: number;

  @Expose()
  public value: number;

  @Expose()
  public start_date: Date;

  @Expose()
  public end_date: Date;

  @Expose()
  public active: boolean;
}
