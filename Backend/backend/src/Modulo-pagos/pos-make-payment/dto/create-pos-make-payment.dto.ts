import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatePosMakePaymentDto {
  @Expose()
  public id: number;

  @Expose()
  public config_id: number;

  @Expose()
  public payment_method_id: string;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public payment_name: string;

  @Expose()
  public amount: number;

  @Expose()
  public payment_date: Date;
}
