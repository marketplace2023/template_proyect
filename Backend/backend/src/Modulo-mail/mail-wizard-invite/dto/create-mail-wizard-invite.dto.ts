import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailWizardInviteDto {
  @Expose()
  public id: number;

  @Expose()
  public res_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public res_mode: string;

  @Expose()
  public message: string;

  @Expose()
  public send_mail: boolean;
}
