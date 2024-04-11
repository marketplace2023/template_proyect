import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailResendPartnerDto {
  @Expose()
  public id: number;

  @Expose()
  public partner_id: number;

  @Expose()
  public resend_wizard_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public message: string;

  @Expose()
  public resend: boolean;
}
