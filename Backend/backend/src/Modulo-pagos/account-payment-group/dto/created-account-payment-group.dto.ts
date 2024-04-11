import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedAccountPaymentGroupDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public currency_id: number;

  @Expose()
  public amount: number;

  @Expose()
  public payment_mode_id: number;

  @Expose()
  public state: string;

  @Expose()
  public reconciled: boolean;

  @Expose()
  public payments_ids: number;
}
