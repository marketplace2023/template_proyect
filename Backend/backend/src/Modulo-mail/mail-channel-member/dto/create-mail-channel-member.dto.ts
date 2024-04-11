import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailChannelMemberDto {
  @Expose()
  public id: number;

  @Expose()
  public partner_id: number;

  @Expose()
  public guest_id: number;

  @Expose()
  public channel_id: number;

  @Expose()
  public fetched_message_id: number;

  @Expose()
  public seen_message_id: number;

  @Expose()
  public rtc_inviting_session_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public custom_channel_name: string;

  @Expose()
  public fold_state: string;

  @Expose()
  public is_minimized: boolean;

  @Expose()
  public is_pinned: boolean;

  @Expose()
  public last_interest_dt: Date;

  @Expose()
  public last_seen_dt: Date;
}
