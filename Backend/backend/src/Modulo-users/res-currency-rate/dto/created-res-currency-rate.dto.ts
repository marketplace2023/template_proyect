import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateResCurrencyRateDto {
  @Expose()
  public readonly id: number;

  @Expose()
  public readonly currency_id: number;

  @Expose()
  public readonly company_id: number;

  @Expose()
  public readonly user_id: number;

  @Expose()
  public readonly create_uid: number;

  @Expose()
  public readonly write_uid: number;

  @Expose()
  public readonly name: string;

  @Expose()
  public readonly rate: number;
}
