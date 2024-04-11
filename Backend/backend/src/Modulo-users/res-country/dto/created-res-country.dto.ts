import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateResCountryDto {
  @Expose()
  public id: number;

  @Expose()
  public state: number;

  @Expose()
  public name: string;

  @Expose()
  public code: string;

  @Expose()
  public currency_id: number;

  @Expose()
  public phone_code: string;

  @Expose()
  public capital: string;

  @Expose()
  public population: number;

  @Expose()
  public surface_area: number;

  @Expose()
  public latitude: number;

  @Expose()
  public longitude: number;

  @Expose()
  public user_id: number;
}
