import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateDeliveryPriceRuleDto {
  @Expose()
  public id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public carrier_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public variable: string;

  @Expose()
  public operator: string;

  @Expose()
  public variable_factor: string;

  @Expose()
  public list_base_price: number;

  @Expose()
  public list_price: number;

  @Expose()
  public max_value: number;
}
