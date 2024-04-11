import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedPaymentReceiptDto {
  @Expose()
  public id: number;

  @Expose()
  public payment_order_id: number;

  @Expose()
  public payment_date: Date;

  @Expose()
  public payment_method_id: number;

  @Expose()
  public amount: number;

  @Expose()
  public reference: string;

  @Expose()
  public state: string;

  @Expose()
  public payment_id: number;
}
