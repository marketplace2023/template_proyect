import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedPaymentLineDto {
  @Expose()
  public id: number;

  @Expose()
  public payment_transaction_id: number;

  @Expose()
  public amount: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public description: string;
}
