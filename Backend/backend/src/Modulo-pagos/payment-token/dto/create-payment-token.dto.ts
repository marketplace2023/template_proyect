import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatePaymentTokenDto {
  @Expose()
  public id: number;

  @Expose()
  public provider_id: number;

  @Expose()
  public partner_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public payment_details: string;

  @Expose()
  public provider_ref: string;

  @Expose()
  public verified: boolean;

  @Expose()
  public active: boolean;
}
