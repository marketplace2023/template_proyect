import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockMoveDto {
  @Expose()
  public id: number;

  @Expose()
  public picking_id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public product_qty: number;

  @Expose()
  public location_id_from: number;

  @Expose()
  public location_id_to: number;

  @Expose()
  public state: string;

  @Expose()
  public picking_type_id: number;

  @Expose()
  public shipment_id: number;

  @Expose()
  public stock_move_id: number;
}
