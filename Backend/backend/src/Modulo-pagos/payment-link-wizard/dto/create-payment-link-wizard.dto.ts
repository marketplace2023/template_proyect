import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatePaymentLinkWizardDto {
  @Expose()
  public id: number;

  @Expose()
  public res_id: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public partner_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public res_model: string;

  @Expose()
  public description: string;

  @Expose()
  public payment_provider_selection: string;

  @Expose()
  public amount: number;

  @Expose()
  public amount_max: number;
}
