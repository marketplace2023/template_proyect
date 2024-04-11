import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockPickingTypeDto {
  @Expose()
  public id: number;

  @Expose()
  public color: number;

  @Expose()
  public sequence: number;

  @Expose()
  public sequence_id: number;

  @Expose()
  public default_location_src_id: number;

  @Expose()
  public default_location_dest_id: number;

  @Expose()
  public return_picking_type_id: number;

  @Expose()
  public warehouse_id: number;

  @Expose()
  public reservation_days_before: number;

  @Expose()
  public reservation_days_before_priority: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public sequence_code: string;

  @Expose()
  public code: string;

  @Expose()
  public reservation_method: string;

  @Expose()
  public barcode: string;

  @Expose()
  public create_backorder: string;

  @Expose()
  public name: number;

  @Expose()
  public show_entire_packs: number;

  @Expose()
  public active: number;

  @Expose()
  public use_create_lots: number;

  @Expose()
  public use_existing_lots: number;

  @Expose()
  public print_label: number;

  @Expose()
  public show_operations: number;

  @Expose()
  public show_reserved: number;

  @Expose()
  public auto_show_reception_report: number;

  @Expose()
  public sale_type_id: number;
}
