import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockCarrierDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public code: string;

  @Expose()
  public description: string;

  @Expose()
  public website: string;

  @Expose()
  public active: boolean;

  @Expose()
  public pricelist_id: number;

  @Expose()
  public stock_volume_id: number;

  @Expose()
  public stockcarrier_id: number;

  @Expose()
  public stock_carrier_id: number;

  @Expose()
  public stock_tranking_id: number;
}
