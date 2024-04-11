import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockPickingPackageDto {
  @Expose()
  public id: number;

  @Expose()
  public picking_id: number;

  @Expose()
  public package_type: number;

  @Expose()
  public weight: number;

  @Expose()
  public volume: number;

  @Expose()
  public barcode: string;

  @Expose()
  public tracking_number: string;

  @Expose()
  public state: string;

  @Expose()
  public shipment_id: number;
}
