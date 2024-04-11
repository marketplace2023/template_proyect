import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockShipmentReturnDto {
  @Expose()
  public id: number;

  @Expose()
  public shipment_id: number;

  @Expose()
  public reason: string;

  @Expose()
  public description: string;

  @Expose()
  public date: Date;

  @Expose()
  public state: string;

  @Expose()
  public stock_shipment_return_id: number;

  @Expose()
  public stock_shipment_returns_id: number;

  @Expose()
  public stock_volume_id: number;

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
  public s_s_return_id: number;
}
