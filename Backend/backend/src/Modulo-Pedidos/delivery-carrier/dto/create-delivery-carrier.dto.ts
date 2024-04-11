import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateDeliveryCarrierDto {
  @Expose()
  public id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public company_id: number;

  @Expose()
  public product_ide: number;

  @Expose()
  public shipping_insurance: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public delivery_type: string;

  @Expose()
  public integration_level: string;

  @Expose()
  public invoice_policy: string;

  @Expose()
  public name: string;

  @Expose()
  public carrier_description: string;

  @Expose()
  public active: boolean;

  @Expose()
  public prod_environment: boolean;

  @Expose()
  public debug_logging: boolean;

  @Expose()
  public free_over: boolean;

  @Expose()
  public return_label_on_delivery: boolean;

  @Expose()
  public get_return_label_from_portal: boolean;

  @Expose()
  public margin: string;

  @Expose()
  public amount: string;

  @Expose()
  public fixed_price: string;

  @Expose()
  public website_id: number;

  @Expose()
  public is_published: boolean;

  @Expose()
  public dcarrier: number;

  @Expose()
  public delivery_carrier_id: number;

  @Expose()
  public stock_volume_id: number;

  @Expose()
  public delivery_carrierTrack_id: number;
}
