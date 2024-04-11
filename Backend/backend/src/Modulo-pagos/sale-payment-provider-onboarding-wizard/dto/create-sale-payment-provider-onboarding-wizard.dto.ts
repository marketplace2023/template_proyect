import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSalePaymentProviderOnboardingWizardDto {
  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public payment_method: string;

  @Expose()
  public paypal_user_type: string;

  @Expose()
  public paypal_email_account: string;

  @Expose()
  public paypal_seller_account: string;

  @Expose()
  public paypal_pdt_token: string;

  @Expose()
  public manual_name: string;

  @Expose()
  public journal_name: string;

  @Expose()
  public acc_number: string;

  @Expose()
  public manual_post_msg: string;
}
