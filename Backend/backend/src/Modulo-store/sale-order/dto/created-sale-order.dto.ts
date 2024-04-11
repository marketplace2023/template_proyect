import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSaleOrderDto {
  @Expose()
  public id: number;

  @Expose()
  public campaign_id: number;

  @Expose()
  public source_id: number;

  @Expose()
  public medium_id: number;

  @Expose()
  public message_main_attachment_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public partner_id: number;

  @Expose()
  public partner_invoice_id: number;

  @Expose()
  public partner_shipping_id: number;

  @Expose()
  public fiscal_position_id: number;

  @Expose()
  public payment_term_id: number;

  @Expose()
  public pricelist_id: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public user_id: number;

  @Expose()
  public team_id: number;

  @Expose()
  public analytic_account_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public access_token: string;

  @Expose()
  public name: string;

  @Expose()
  public state: string;

  @Expose()
  public client_order_ref: string;

  @Expose()
  public origin: string;

  @Expose()
  public reference: string;

  @Expose()
  public signed_by: string;

  @Expose()
  public invoice_status: string;

  @Expose()
  public validity_date: string;

  @Expose()
  public note: string;

  @Expose()
  public currency_rate: number;

  @Expose()
  public amount_untaxed: number;

  @Expose()
  public amount_tax: number;

  @Expose()
  public amount_total: number;

  @Expose()
  public require_signature: boolean;

  @Expose()
  public require_payment: boolean;

  @Expose()
  public commitment_date: Date;

  @Expose()
  public date_order: Date;

  @Expose()
  public signed_on: Date;

  @Expose()
  public sale_order_template_id: Date;

  @Expose()
  public opportunity_id: number;

  @Expose()
  public incoterm: number;

  @Expose()
  public warehouse_id: number;

  @Expose()
  public procurement_group_id: number;

  @Expose()
  public incoterm_location: string;

  @Expose()
  public picking_policy: string;

  @Expose()
  public delivery_status: string;

  @Expose()
  public effective_date: number;

  @Expose()
  public amount_unpaid: number;

  @Expose()
  public website_id: number;

  @Expose()
  public shop_warning: string;

  @Expose()
  public cart_recovery_email_sent: boolean;
}
