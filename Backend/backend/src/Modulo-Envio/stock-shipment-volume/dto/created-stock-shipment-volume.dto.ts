import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockShipmentVolumeDto {
  @Expose()
  public id: number;

  @Expose()
  public shipment_id: number;

  @Expose()
  public volume: number;

  @Expose()
  public unit: string;

  @Expose()
  public stock_shipment_Volume_id: number;

  @Expose()
  public orderLineIds: number[];

  @Expose()
  public productTemplateIds: number[];

  @Expose()
  public res_partnerIds: number[];

  @Expose()
  public stockPickingLine_Ids: number[];

  @Expose()
  public stockMove_Ids: number[];

  @Expose()
  public stockPicking_Ids: number[];

  @Expose()
  public stockPickingType_Ids: number[];

  @Expose()
  public stockPickingPackage_Ids: number[];

  @Expose()
  public stockPickingPackageLine_Ids: number[];

  @Expose()
  public shipmentVolume_id: number;

  @Expose()
  public s_s_volume_id: number;
}
