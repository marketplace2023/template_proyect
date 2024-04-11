import { Expose } from 'class-transformer';
import { Entity } from 'typeorm';

@Entity()
export class CreateResPartnerDto {
  @Expose()
  public readonly id: number;

  @Expose()
  public readonly name: string;

  @Expose()
  public readonly company_id: number;

  @Expose()
  public readonly title: string;

  @Expose()
  public readonly parent_id: number;

  @Expose()
  public readonly user_id: number;

  @Expose()
  public readonly state_id: number;

  @Expose()
  public readonly country_id: number;

  @Expose()
  public readonly industry_id: number;

  @Expose()
  public readonly color: number;

  @Expose()
  public readonly commercial_partner_id: number;

  @Expose()
  public readonly create_uid: number;

  @Expose()
  public readonly write_uid: number;

  @Expose()
  public readonly display_name: string;

  @Expose()
  public readonly ref: string;

  @Expose()
  public readonly lang: string;

  @Expose()
  public readonly tz: string;

  @Expose()
  public readonly vat: string;

  @Expose()
  public readonly company_registry: string;

  @Expose()
  public readonly website: string;

  @Expose()
  public readonly street: string;

  @Expose()
  public readonly street2: string;

  @Expose()
  public readonly zip: string;

  @Expose()
  public readonly city: string;

  @Expose()
  public readonly email: string;

  @Expose()
  public readonly phone: string;

  @Expose()
  public readonly mobile: string;

  @Expose()
  public readonly commercial_company_name: string;

  @Expose()
  public readonly company_name: string;

  @Expose()
  public readonly date: Date;

  @Expose()
  public readonly comment: string;

  @Expose()
  public readonly partner_latitude: number;

  @Expose()
  public readonly partner_longitude: number;

  @Expose()
  public readonly active: boolean;

  @Expose()
  public readonly employee: boolean;

  @Expose()
  public readonly is_company: boolean;

  @Expose()
  public readonly partner_share: boolean;

  @Expose()
  public readonly write_date: Date;

  @Expose()
  public readonly message_main_attachment_id: number;

  @Expose()
  public readonly message_bounce: number;

  @Expose()
  public readonly email_normalized: string;

  @Expose()
  public readonly signup_token: string;

  @Expose()
  public readonly signup_type: string;

  @Expose()
  public readonly signup_expiration: Date;

  @Expose()
  public readonly calendar_last_notif_ack: Date;

  @Expose()
  public readonly team_id: number;

  @Expose()
  public readonly partner_gid: number;

  @Expose()
  public readonly additional_info: string;

  @Expose()
  public readonly phone_sanitized: string;

  @Expose()
  public readonly picking_warn: string;

  @Expose()
  public readonly picking_warn_msg: string;

  @Expose()
  public readonly supplier_rank: number;

  @Expose()
  public readonly customer_rank: number;

  @Expose()
  public readonly invoice_warn: string;

  @Expose()
  public readonly invoice_warn_msg: string;

  @Expose()
  public readonly debit_limit: number;

  @Expose()
  public readonly last_time_entries_checked: Date;

  @Expose()
  public readonly purchase_warn: string;

  @Expose()
  public readonly purchase_warn_msg: boolean;

  @Expose()
  public readonly sale_warn: string;

  @Expose()
  public readonly sale_warn_msg: boolean;

  @Expose()
  public choose_delivery_package_Ids: number[];

  @Expose()
  public choose_delivery_carrier_Ids: number[];

  @Expose()
  public delivery_carrier_Ids: number[];

  @Expose()
  public delivery_package_Ids: number[];

  @Expose()
  public delivery_shipment_Ids: number[];

  @Expose()
  public order_line_Ids: number[];

  @Expose()
  public product_template_Ids: number[];

  @Expose()
  public stock_picking_line_Ids: number[];

  @Expose()
  public stock_move_Ids: number[];

  @Expose()
  public stock_picking_Ids: number[];

  @Expose()
  public stock_move_res_id: number;

  @Expose()
  public res_partner_id: number;

  @Expose()
  public stockPicking_id: number;
}
