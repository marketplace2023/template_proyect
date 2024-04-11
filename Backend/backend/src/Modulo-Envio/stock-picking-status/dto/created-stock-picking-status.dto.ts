import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockPickingStatusDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public code: string;

  @Expose()
  public sequence: number;

  @Expose()
  public active: boolean;

  @Expose()
  public stock_picking_status_id: number;

  @Expose()
  public stock_volume_id: number;

  @Expose()
  public stockShStatus_id: number;
}
