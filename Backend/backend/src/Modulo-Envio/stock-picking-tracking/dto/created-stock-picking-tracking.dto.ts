import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockPickingTrackingDto {
  @Expose()
  public id: number;

  @Expose()
  public picking_id: number;

  @Expose()
  public carrier_id: number;

  @Expose()
  public tracking_number: string;

  @Expose()
  public stock_picking_id: number;

  @Expose()
  public stock_picking_tracking_id: number;

  @Expose()
  public stock_volume_id: number;

  @Expose()
  public stockShTracking_id: number;

  @Expose()
  public stock_tranking_id: number;
}
