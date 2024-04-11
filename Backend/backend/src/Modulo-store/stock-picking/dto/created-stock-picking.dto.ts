import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockPickingDto {
  @Expose()
  public id: number;

  @Expose()
  public message_main_attachment_id: number;

  @Expose()
  public backorder_id: number;

  @Expose()
  public group_id: number;

  @Expose()
  public location_id: number;

  @Expose()
  public location_dest_id: number;

  @Expose()
  public picking_type_id: number;

  @Expose()
  public partner_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public user_id: number;

  @Expose()
  public owner_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public name: string;

  @Expose()
  public origin: string;

  @Expose()
  public move_type: string;

  @Expose()
  public state: string;

  @Expose()
  public priority: string;

  @Expose()
  public note: string;

  @Expose()
  public has_deadline_issue: boolean;

  @Expose()
  public printed: boolean;

  @Expose()
  public is_locked: boolean;

  @Expose()
  public immediate_transfer: boolean;

  @Expose()
  public scheduled_date: Date;

  @Expose()
  public date_deadline: Date;

  @Expose()
  public date: Date;

  @Expose()
  public date_done: Date;

  @Expose()
  public sale_id: number;

  @Expose()
  public pos_session_id: number;

  @Expose()
  public pos_order_id: number;

  @Expose()
  public website_id: number;

  @Expose()
  public stock_picking_id: number;
}
