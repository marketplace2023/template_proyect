import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSaleOrderPaymentDto {
  @Expose()
  public id: number;

  @Expose()
  public order_id: number;

  @Expose()
  public payment_method: number;

  @Expose()
  public payment_date: Date;

  @Expose()
  public amount: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public state: string;
}
