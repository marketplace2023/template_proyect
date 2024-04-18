import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailChannelDto {
  @Expose()
  public id: number;

  @Expose()
  public message_main_attachment_id: number;

  @Expose()
  public group_public_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public name: string;

  @Expose()
  public channel_type: string;

  @Expose()
  public default_display_mode: string;

  @Expose()
  public uuid: string;

  @Expose()
  public description: string;

  @Expose()
  public active: boolean;
}
