import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateOrderLineDto {
  @Expose()
  public id: number;

  @Expose()
  public order_id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public product_uom_qty: number;

  @Expose()
  public price_unit: number;

  @Expose()
  public discount: number;

  @Expose()
  public tax_ids: number;

  @Expose()
  public shipment_ids: number;

  @Expose()
  public stock_move_orderLine_id: number;
}
