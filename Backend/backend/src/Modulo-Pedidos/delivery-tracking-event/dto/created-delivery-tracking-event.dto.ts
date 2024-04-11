import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateDeliveryTrackingEventDto {
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
  public delivery_tracking_event_id: number;

  @Expose()
  public stock_volume_id: number;

  @Expose()
  public tranck_event_id: number;
}
