import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailNotificationDto {
  @Expose()
  public id: number;

  @Expose()
  public author_id: number;

  @Expose()
  public mail_message_id: number;

  @Expose()
  public mail_mail_id: number;

  @Expose()
  public res_partner_id: number;

  @Expose()
  public notification_type: string;

  @Expose()
  public notification_status: string;

  @Expose()
  public failure_type: string;

  @Expose()
  public failure_reason: string;

  @Expose()
  public is_read: boolean;

  @Expose()
  public read_date: Date;

  @Expose()
  public sms_id: number;

  @Expose()
  public sms_number: string;

  @Expose()
  public letter_id: number;
}
