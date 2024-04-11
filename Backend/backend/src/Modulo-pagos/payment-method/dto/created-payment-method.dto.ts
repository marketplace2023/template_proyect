import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedPaymentMethodDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public code: string;

  @Expose()
  public description: string;
}
