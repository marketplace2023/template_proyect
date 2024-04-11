import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAccountPaymentTermLineDto {
  @Expose()
  public id: number;

  @Expose()
  public months: number;

  @Expose()
  public days: number;

  @Expose()
  public days_after: number;

  @Expose()
  public discount_days: number;

  @Expose()
  public payment_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public value: string;

  @Expose()
  public value_amount: number;

  @Expose()
  public end_month: boolean;

  @Expose()
  public discount_percentage: number;
}
