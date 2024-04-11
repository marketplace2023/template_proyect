import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateChooseDeliveryCarrierDto {
  @Expose()
  public id: number;

  @Expose()
  public order_id: number;

  @Expose()
  public carrier_id: number;

  @Expose()
  public choose_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public deliveryPackage_id: number;

  @Expose()
  public delivery_message: string;

  @Expose()
  public delivery_price: number;

  @Expose()
  public display_price: number;

  @Expose()
  public chooseDeliveryCarrier_id: number[];

  @Expose()
  public dcarrier_id: number;

  @Expose()
  public stock_shipment_carrier_id: number;

  @Expose()
  public stock_volume_id: number;

  @Expose()
  public chooseDpackage_carrier_id: number;
}
