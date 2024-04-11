import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSaleShopDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public street: string;

  @Expose()
  public city: string;

  @Expose()
  public zip: number;

  @Expose()
  public country_id: number;

  @Expose()
  public state_id: number;

  @Expose()
  public phone: string;

  @Expose()
  public website: string;

  @Expose()
  public email: string;

  @Expose()
  public company_id: number;

  @Expose()
  public state: number;

  @Expose()
  public channel_id: number;

  @Expose()
  public is_active: boolean;
}
