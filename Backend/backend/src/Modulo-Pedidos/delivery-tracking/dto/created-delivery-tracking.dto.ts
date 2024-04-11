import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateDeliveryTrackingDto {
  @Expose()
  public id: number;

  @Expose()
  public shipment_id: number;

  @Expose()
  public status: string;

  @Expose()
  public date: Date;

  @Expose()
  public location: string;

  @Expose()
  public details: string;

  @Expose()
  public delivery_tracking_id: number;

  @Expose()
  public stock_volume_id: number;

  @Expose()
  public Tracking_id: number;

  @Expose()
  public package_tranck_id: number;

  @Expose()
  public stock_move_delivery_id: number;
}
