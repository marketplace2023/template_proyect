import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateResUsersLogDto {
  @Expose()
  public readonly id: number;

  @Expose()
  public readonly create_uid: number;

  @Expose()
  public readonly user_id: number;

  @Expose()
  public readonly model: string;

  @Expose()
  public readonly record_id: number;

  @Expose()
  public readonly action: string;

  @Expose()
  public readonly field_name: string;

  @Expose()
  public readonly old_value: string;
}
