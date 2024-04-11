import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateChooseDeliveryPackageDto {
  @Expose()
  public id: number;

  @Expose()
  public picking_id: number;

  @Expose()
  public delivery_package_type_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public shipping_weight: string;

  @Expose()
  public chooseDeliveryPackage_id: number;

  @Expose()
  public stock_shipment_weight_id: number;

  @Expose()
  public stock_return_id: number;

  @Expose()
  public chooseDpackage_tranking_id: number;
}
