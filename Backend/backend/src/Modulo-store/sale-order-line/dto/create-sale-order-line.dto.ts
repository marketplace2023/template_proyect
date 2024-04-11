import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSaleOrderLineDto {
  @Expose()
  public id: number;

  @Expose()
  public order_id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public company_id: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public order_partner_id: number;

  @Expose()
  public salesman_id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public product_uom: number;

  @Expose()
  public product_packaging_id: number;

  @Expose()
  public state: string;

  @Expose()
  public display_type: string;

  @Expose()
  public qty_delivered_method: string;

  @Expose()
  public invoice_status: string;

  @Expose()
  public analytic_distribution: string;

  @Expose()
  public name: string;

  @Expose()
  public product_uom_qty: number;

  @Expose()
  public price_unit: number;

  @Expose()
  public discount: number;

  @Expose()
  public price_reduce: number;

  @Expose()
  public price_subtotal: number;

  @Expose()
  public price_total: number;

  @Expose()
  public price_reduce_taxexcl: number;

  @Expose()
  public price_reduce_taxinc: number;

  @Expose()
  public qty_delivered: number;

  @Expose()
  public qty_invoiced: number;

  @Expose()
  public qty_to_invoice: number;

  @Expose()
  public untaxed_amount_invoiced: number;

  @Expose()
  public untaxed_amount_to_invoice: number;

  @Expose()
  public is_downpayment: boolean;

  @Expose()
  public is_expense: boolean;

  @Expose()
  public price_tax: number;

  @Expose()
  public product_packaging_qty: number;

  @Expose()
  public customer_lead: boolean;

  @Expose()
  public route_id: number;

  @Expose()
  public linked_line_id: number;

  @Expose()
  public shop_warning: string;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public sale_order_line_id: number;

  @Expose()
  public res_partner_id: number;
}
