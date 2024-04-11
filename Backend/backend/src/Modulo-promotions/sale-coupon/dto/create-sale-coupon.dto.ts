import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSaleCouponDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public code: number;

  @Expose()
  public program_id: number;

  @Expose()
  public partner_id: number;

  @Expose()
  public state: string;

  @Expose()
  public discount_type: number;

  @Expose()
  public discount_percentage: number;

  @Expose()
  public discount_fixed_amount: number;

  @Expose()
  public discount_apply_on: number;

  @Expose()
  public minimum_amount: number;

  @Expose()
  public expiration_date: Date;

  @Expose()
  public usage_limit: number;

  @Expose()
  public total_used: number;

  @Expose()
  public order_ids: number;

  @Expose()
  public stockpline_id: number;
}
