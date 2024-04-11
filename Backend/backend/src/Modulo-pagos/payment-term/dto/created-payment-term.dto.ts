import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedPaymentTermDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public code: string;

  @Expose()
  public description: string;

  @Expose()
  public days: number;

  @Expose()
  public discount: number;

  @Expose()
  public percentage: boolean;

  @Expose()
  public days_after_due: number;

  @Expose()
  public payments_id: number;
}
