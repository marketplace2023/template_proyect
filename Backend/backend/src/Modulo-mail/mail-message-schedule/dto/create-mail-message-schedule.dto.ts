import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailMessageScheduleDto {
  @Expose()
  public id: number;

  @Expose()
  public mail_message_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public notification_parameters: string;

  @Expose()
  public scheduled_datetime: Date;
}
