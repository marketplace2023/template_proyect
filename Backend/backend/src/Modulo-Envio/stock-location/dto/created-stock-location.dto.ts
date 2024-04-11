import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockLocationDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public code: string;

  @Expose()
  public parent_id: number;

  @Expose()
  public location_type: string;

  @Expose()
  public description: string;

  @Expose()
  public active: boolean;

  @Expose()
  public stock_location_id: number;

  @Expose()
  public stock_volume_id: number;

  @Expose()
  public stockLocation_id: number;

  @Expose()
  public stock_trancking_id: number;

  @Expose()
  public stock_picking_line_id: number;
}
