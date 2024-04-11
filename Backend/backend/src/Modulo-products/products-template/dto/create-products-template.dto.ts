import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductsTemplateDto {
  @Expose()
  public id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public message_main_attachment_id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public categ_id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public uom_id: number;

  @Expose()
  public uom_po_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public color: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public detailed_type: string;

  @Expose()
  public type: string;

  @Expose()
  public default_code: string;

  @Expose()
  public priority: string;

  @Expose()
  public name: string;

  @Expose()
  public description: string;

  @Expose()
  public description_purchase: string;

  @Expose()
  public description_sale: string;

  @Expose()
  public list_price: number;

  @Expose()
  public volume: number;

  @Expose()
  public weight: number;

  @Expose()
  public sale_ok: boolean;

  @Expose()
  public purchase_ok: boolean;

  @Expose()
  public active: boolean;

  @Expose()
  public can_image_1024_be_zoomed: boolean;

  @Expose()
  public has_configurable_attributest: boolean;

  @Expose()
  public tracking: string;

  @Expose()
  public description_picking: string;

  @Expose()
  public description_pickingout: string;

  @Expose()
  public description_pickingin: string;

  @Expose()
  public sale_delay: string;

  @Expose()
  public purchase_method: string;

  @Expose()
  public purchase_line_warn: string;

  @Expose()
  public purchase_line_warn_msg: string;

  @Expose()
  public service_type: string;

  @Expose()
  public sale_line_warn: string;

  @Expose()
  public expense_policy: string;

  @Expose()
  public invoice_policy: string;

  @Expose()
  public sale_line_warn_msg: string;

  @Expose()
  public service_tracking: string;

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
  public res_partner_Ids: number[];

  @Expose()
  public stock_picking_line_Ids: number[];

  @Expose()
  public stock_move_Ids: number[];

  @Expose()
  public stock_picking_Ids: number[];

  @Expose()
  public stock_move_productsTemplate_id: number;

  @Expose()
  public readonly sale_order_template_id: number;
}
