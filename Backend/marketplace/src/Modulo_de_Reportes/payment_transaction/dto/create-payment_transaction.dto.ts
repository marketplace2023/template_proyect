import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatePaymentTransactionDto {
  @Expose()
  public id: number;

  @Expose()
  public provider_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public token_id: number;

  @Expose()
  public source_transaction_id: number;

  @Expose()
  public callback_model_id: number;

  @Expose()
  public callback_res_id: number;

  @Expose()
  public partner_id: number;

  @Expose()
  public partner_state_id: number;

  @Expose()
  public partner_country_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public reference: string;

  @Expose()
  public provider_reference: string;

  @Expose()
  public state: string;

  @Expose()
  public operation: string;

  @Expose()
  public landing_route: string;

  @Expose()
  public callback_method: string;

  @Expose()
  public callback_hash: string;

  @Expose()
  public partner_name: string;

  @Expose()
  public partner_lang: string;

  @Expose()
  public partner_email: string;

  @Expose()
  public partner_address: string;

  @Expose()
  public partner_zip: string;

  @Expose()
  public partner_city: string;

  @Expose()
  public partner_phone: string;

  @Expose()
  public state_message: string;

  @Expose()
  public amount: number;

  @Expose()
  public fees: number;

  @Expose()
  public is_post_processed: boolean;

  @Expose()
  public tokenize: boolean;

  @Expose()
  public callback_is_done: boolean;

  @Expose()
  public last_state_change: Date;

  @Expose()
  public payment_id: number;

  @Expose()
  public is_donation: boolean;

  @Expose()
  public paymentTransaction_id: number;

  @Expose()
  public stockpline_id: number;
}
