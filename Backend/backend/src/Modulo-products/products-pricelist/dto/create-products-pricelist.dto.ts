import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductsPricelistDto {
  @Expose()
  public id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public discount_policy: string;

  @Expose()
  public name: string;

  @Expose()
  public active: boolean;
}
