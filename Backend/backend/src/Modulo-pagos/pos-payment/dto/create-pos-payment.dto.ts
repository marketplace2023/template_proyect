import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatePosPaymentDto {
  @Expose()
  public id: number;

  @Expose()
  public pos_order_id: number;

  @Expose()
  public payment_method_id: number;

  @Expose()
  public session_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public account_move_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public name: string;

  @Expose()
  public card_type: string;

  @Expose()
  public cardholder_name: string;

  @Expose()
  public transaction_id: string;

  @Expose()
  public payment_status: string;

  @Expose()
  public ticket: string;

  @Expose()
  public amount: number;

  @Expose()
  public is_change: boolean;

  @Expose()
  public payment_date: Date;
}
