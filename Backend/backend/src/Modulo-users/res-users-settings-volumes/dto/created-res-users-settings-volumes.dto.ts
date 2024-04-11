import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateResUsersSettingsVolumesDto {
  @Expose()
  public readonly id: number;

  @Expose()
  public readonly user_setting_id: number;

  @Expose()
  public readonly user_id: number;

  @Expose()
  public readonly partner_id: number;

  @Expose()
  public readonly guest_id: number;

  @Expose()
  public readonly create_uid: number;

  @Expose()
  public readonly write_uid: number;

  @Expose()
  public readonly volume: number;
}
