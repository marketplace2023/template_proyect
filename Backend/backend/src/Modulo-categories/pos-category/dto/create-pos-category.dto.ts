import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatePosCategoryDto {
  @Expose()
  public id: number;

  @Expose()
  public picking_type_id: number;

  @Expose()
  public journal_id: number;

  @Expose()
  public invoice_journal_id: number;

  @Expose()
  public iface_start_categ_id: number;

  @Expose()
  public sequence_id: number;

  @Expose()
  public sequence_line_id: number;

  @Expose()
  public pricelist_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public group_pos_manager_id: number;

  @Expose()
  public group_pos_user_id: number;

  @Expose()
  public tip_product_id: number;

  @Expose()
  public default_fiscal_position_id: number;

  @Expose()
  public rounding_method: number;

  @Expose()
  public warehouse_id: number;

  @Expose()
  public route_id: number;

  @Expose()
  public limited_products_amount: number;

  @Expose()
  public limited_partners_amount: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public name: string;

  @Expose()
  public iface_tax_included: string;

  @Expose()
  public proxy_ip: string;

  @Expose()
  public uuid: string;

  @Expose()
  public picking_policy: string;

  @Expose()
  public receipt_header: string;

  @Expose()
  public receipt_footer: string;

  @Expose()
  public iface_cashdrawer: boolean;

  @Expose()
  public iface_electronic_scale: boolean;

  @Expose()
  public iface_customer_facing_display_via_proxy: boolean;

  @Expose()
  public iface_customer_facing_display_local: boolean;

  @Expose()
  public iface_print_via_proxy: boolean;

  @Expose()
  public iface_scan_via_proxy: boolean;

  @Expose()
  public iface_big_scrollbars: boolean;

  @Expose()
  public iface_print_auto: boolean;

  @Expose()
  public iface_print_skip_screen: boolean;

  @Expose()
  public restrict_price_control: boolean;

  @Expose()
  public is_margins_costs_accessible_to_every_user: boolean;

  @Expose()
  public set_maximum_difference: boolean;

  @Expose()
  public active: boolean;

  @Expose()
  public iface_tipproduct: boolean;

  @Expose()
  public use_pricelist: boolean;

  @Expose()
  public tax_regime_selection: boolean;

  @Expose()
  public start_category: boolean;

  @Expose()
  public limit_categories: boolean;

  @Expose()
  public module_pos_restaurant: boolean;

  @Expose()
  public module_pos_discount: boolean;

  @Expose()
  public module_pos_mercury: boolean;

  @Expose()
  public is_posbox: boolean;

  @Expose()
  public is_header_or_footer: boolean;

  @Expose()
  public module_pos_hr: boolean;

  @Expose()
  public other_devices: boolean;

  @Expose()
  public cash_rounding: boolean;

  @Expose()
  public only_round_cash_method: boolean;

  @Expose()
  public manual_discount: boolean;

  @Expose()
  public ship_later: boolean;

  @Expose()
  public limited_products_loading: boolean;

  @Expose()
  public product_load_background: boolean;

  @Expose()
  public limited_partners_loading: boolean;

  @Expose()
  public partner_load_background: boolean;

  @Expose()
  public amount_authorized_diff: string;

  @Expose()
  public epson_printer_ip: string;

  @Expose()
  public crm_team_id: number;

  @Expose()
  public down_payment_product_id: number;
}
