import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateDeliveryShipmentDto {
  @Expose()
  public id: number;

  @Expose()
  public order_id: number;

  @Expose()
  public carrier_id: number;

  @Expose()
  public shipping_method_id: number;

  @Expose()
  public tracking_number: string;

  @Expose()
  public status: string;

  @Expose()
  public chooseDeliveryCarrier_id: number[];

  @Expose()
  public chooseDeliveryPackage_id: number;

  @Expose()
  public dShipment_id: number;

  @Expose()
  public deliveryPack_id: number;

  @Expose()
  public shipmentVolumePack_id: number;

  @Expose()
  public Tracking_id: number;

  @Expose()
  public Return_id: number;
}
