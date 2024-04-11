import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateDeliveryPackageDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public code: string;

  @Expose()
  public description: string;

  @Expose()
  public price: number;

  @Expose()
  public carrier_id: number;

  @Expose()
  public active: number;

  @Expose()
  public chooseDeliveryPackage_id: number;

  @Expose()
  public dPackage_id: number;

  @Expose()
  public shipment_id: number;

  @Expose()
  public shipmentVolume_id: number;

  @Expose()
  public Tracking_id: number;

  @Expose()
  public package_id: number;
}
