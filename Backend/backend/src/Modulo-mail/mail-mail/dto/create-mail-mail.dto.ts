import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailMailDto {
  @Expose()
  public id: number;

  @Expose()
  public mail_message_id: number;

  @Expose()
  public fetchmail_server_id: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public email_cc: string;

  @Expose()
  public state: string;

  @Expose()
  public failure_type: string;

  @Expose()
  public body_html: string;

  @Expose()
  public references: string;

  @Expose()
  public headers: string;

  @Expose()
  public email_to: string;

  @Expose()
  public failure_reason: string;

  @Expose()
  public is_notification: boolean;

  @Expose()
  public auto_delete: boolean;

  @Expose()
  public to_delete: boolean;

  @Expose()
  public scheduled_date: Date;
}
