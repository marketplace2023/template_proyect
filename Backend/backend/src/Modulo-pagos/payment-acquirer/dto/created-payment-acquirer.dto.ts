import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedPaymentAcquirerDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public code: string;

  @Expose()
  public payment_methont_id: number;

  @Expose()
  public merchant_id: string;

  @Expose()
  public merchant_account: string;

  @Expose()
  public description: string;

  @Expose()
  public active: boolean;
}
