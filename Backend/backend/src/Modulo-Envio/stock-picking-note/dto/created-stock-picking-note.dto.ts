import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockPickingNoteDto {
  @Expose()
  public id: number;

  @Expose()
  public picking_id: number;

  @Expose()
  public note: string;

  @Expose()
  public stock_picking_note_id: number;

  @Expose()
  public stock_volume_id: number;

  @Expose()
  public stockShNote_id: number;

  @Expose()
  public stock_tranking_id: number;
}
