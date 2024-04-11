import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedDeliveryOrderDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public date_order: Date;

  @Expose()
  public state: string;

  @Expose()
  public picking_ids: number;

  @Expose()
  public carrier_id: number;

  @Expose()
  public tracking_number: string;

  @Expose()
  public amount_total: number;

  @Expose()
  public amount_tax: number;

  @Expose()
  public amount_untaxed: number;

  @Expose()
  public company_id: number;

  @Expose()
  public payment_id: number;
}
