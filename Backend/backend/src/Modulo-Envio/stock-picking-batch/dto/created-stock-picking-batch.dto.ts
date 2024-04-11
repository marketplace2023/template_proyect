import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockPickingBatchDto {
  @Expose()
  public id: number;

  @Expose()
  public picking_id: number;

  @Expose()
  public name: string;

  @Expose()
  public date_expected: number;

  @Expose()
  public location_id: number;

  @Expose()
  public state: string;

  @Expose()
  public stock_picking_batch_id: number;

  @Expose()
  public stock_volume_id: number;

  @Expose()
  public stock_tranking_id: number;
}
