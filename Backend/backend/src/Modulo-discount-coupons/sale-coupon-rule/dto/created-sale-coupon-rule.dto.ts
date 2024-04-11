import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSaleCouponRuleDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public active: boolean;

  @Expose()
  public condition_type: number;

  @Expose()
  public condition_value: number;

  @Expose()
  public discount_type: number;

  @Expose()
  public discount_value: number;

  @Expose()
  public discount_apply_on: string;

  @Expose()
  public product_ids: number;

  @Expose()
  public category_ids: number;

  @Expose()
  public date_from: Date;

  @Expose()
  public date_to: Date;

  @Expose()
  public usage_limit: number;

  @Expose()
  public usage_limit_per_user: number;

  @Expose()
  public active_users_count: number;
}
