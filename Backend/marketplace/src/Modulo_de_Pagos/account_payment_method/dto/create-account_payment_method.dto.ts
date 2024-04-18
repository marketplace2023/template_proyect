import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAccountPaymentMethodDto {
  @Expose()
  public id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public code: string;

  @Expose()
  public payment_type: string;

  @Expose()
  public name: string;
}
