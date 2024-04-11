import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAccountPaymentMethodLineDto {
  @Expose()
  public id: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public journal_id: number;

  @Expose()
  public partner_bank_id: number;

  @Expose()
  public source_currency_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public partner_id: number;

  @Expose()
  public payment_method_line_id: number;

  @Expose()
  public writeoff_account_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public communication: string;

  @Expose()
  public payment_type: string;

  @Expose()
  public partner_type: string;

  @Expose()
  public payment_difference_handling: string;

  @Expose()
  public writeoff_label: string;

  @Expose()
  public payment_date: Date;

  @Expose()
  public amount: number;

  @Expose()
  public source_amount: number;

  @Expose()
  public source_amount_currency: number;

  @Expose()
  public group_payment: boolean;

  @Expose()
  public can_edit_wizard: boolean;

  @Expose()
  public can_group_payments: boolean;
  @Expose()
  public payment_token_id: number;
}
