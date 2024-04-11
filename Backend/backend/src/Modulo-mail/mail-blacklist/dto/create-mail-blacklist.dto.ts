import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailBlacklistDto {
  @Expose()
  public id: number;

  @Expose()
  public message_main_attachment_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public email: string;

  @Expose()
  public active: boolean;
}
