import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAccountPaymentDto {
  @Expose()
  public id: number;

  @Expose()
  public message_main_attachment_id: number;

  @Expose()
  public move_id: number;

  @Expose()
  public partner_bank_id: number;

  @Expose()
  public paired_internal_transfer_payment_id: number;

  @Expose()
  public payment_method_line_id: number;

  @Expose()
  public payment_method_id: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public partner_id: number;

  @Expose()
  public outstanding_account_id: number;

  @Expose()
  public destination_account_id: number;

  @Expose()
  public destination_journal_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public payment_type: string;

  @Expose()
  public partner_type: string;

  @Expose()
  public payment_reference: string;

  @Expose()
  public amount: number;

  @Expose()
  public amount_company_currency_signed: number;

  @Expose()
  public is_reconciled: boolean;

  @Expose()
  public is_matched: boolean;

  @Expose()
  public is_internal_transfer: boolean;

  @Expose()
  public payment_transaction_id: number;

  @Expose()
  public payment_token_id: number;

  @Expose()
  public source_payment_id: number;

  @Expose()
  public pos_payment_method_id: number;

  @Expose()
  public force_outstanding_account_id: number;

  @Expose()
  public pos_session_id: number;
}
