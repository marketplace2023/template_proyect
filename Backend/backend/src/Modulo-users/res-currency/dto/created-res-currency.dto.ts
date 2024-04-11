import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateResCurrencyDto {
  @Expose()
  public readonly id: number;

  @Expose()
  public readonly name: string;

  @Expose()
  public readonly symbol: string;

  @Expose()
  public readonly code: string;

  @Expose()
  public readonly rate: number;

  @Expose()
  public readonly rounding: number;

  @Expose()
  public readonly decimals: number;

  @Expose()
  public readonly active: boolean;
}
