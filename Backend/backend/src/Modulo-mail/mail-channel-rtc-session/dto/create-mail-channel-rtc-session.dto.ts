import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailChannelRtcSessionDto {
  @Expose()
  public id: number;

  @Expose()
  public channel_member_id: number;

  @Expose()
  public channel_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public is_screen_sharing_on: boolean;

  @Expose()
  public is_camera_on: boolean;

  @Expose()
  public is_muted: boolean;

  @Expose()
  public is_deaf: boolean;
}
