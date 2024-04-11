import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedPaymentDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public currency_id: string;

  @Expose()
  public amount: number;

  @Expose()
  public payment_mode_id: number;

  @Expose()
  public state: string;

  @Expose()
  public reconciled: boolean;

  @Expose()
  public partner_id: number;

  @Expose()
  public order_id: number;

  @Expose()
  public invoice_id: number;

  @Expose()
  public payment_group_id: number;
}
