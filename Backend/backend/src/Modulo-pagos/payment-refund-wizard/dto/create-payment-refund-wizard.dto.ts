import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatePaymentRefundWizardDto {
  @Expose()
  public id: number;

  @Expose()
  public payment_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public amount_to_refund: number;
}
