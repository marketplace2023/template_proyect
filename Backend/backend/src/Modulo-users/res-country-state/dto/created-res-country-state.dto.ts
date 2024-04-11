import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateResCountryStateDto {
  @Expose()
  public readonly id: number;

  @Expose()
  public readonly name: string;

  @Expose()
  public readonly code: string;

  @Expose()
  public readonly country_id: number;

  @Expose()
  public readonly user_id: number;
}
