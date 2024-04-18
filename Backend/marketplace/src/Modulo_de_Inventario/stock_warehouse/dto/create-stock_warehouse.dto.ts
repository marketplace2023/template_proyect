import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockWarehouseDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public code: string;

  @Expose()
  public partner_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public active: boolean;

  @Expose()
  public street: string;

  @Expose()
  public city: string;

  @Expose()
  public state_id: number;

  @Expose()
  public country_id: number;

  @Expose()
  public zip: string;

  @Expose()
  public phone: string;

  @Expose()
  public fax: string;

  @Expose()
  public email: string;

  @Expose()
  public website: string;

  @Expose()
  public warehouse_type: string;

  @Expose()
  public account_picking_id: number;

  @Expose()
  public account_picking_out_inp: number;

  @Expose()
  public account_picking_in_id: number;

  @Expose()
  public stock_warehouse_id: number;

  @Expose()
  public stock_volume_id: number;

  @Expose()
  public warehouse_id: number;

  @Expose()
  public stock_tranking_id: number;

  @Expose()
  public stock_picking_line_id: number;
}
