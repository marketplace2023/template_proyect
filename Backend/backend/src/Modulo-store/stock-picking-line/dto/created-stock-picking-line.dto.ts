import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockPickingLineDto {
  @Expose()
  public id: number;

  @Expose()
  public picking_id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public location_id: number;

  @Expose()
  public product_uom_qty: number;

  @Expose()
  public location_dest_id: number;

  @Expose()
  public lot_id: number;

  @Expose()
  public serial_number: string;

  @Expose()
  public state: boolean;

  @Expose()
  public move_id: number;

  @Expose()
  public picking_type_id: number;

  @Expose()
  public notes: boolean;

  @Expose()
  public package_id: number[];

  @Expose()
  public stock_picking_line_id: number;

  @Expose()
  public sale_picking_line_id: number;

  @Expose()
  public saleOrder_id: number;

  @Expose()
  public stockpline_id: number;
}
