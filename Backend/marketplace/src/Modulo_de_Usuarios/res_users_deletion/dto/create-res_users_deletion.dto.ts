import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateResUsersDeletionDto {
  @Expose()
  public readonly id: number;

  @Expose()
  public readonly user_id: number;

  @Expose()
  public readonly user_id_int: number;

  @Expose()
  public readonly create_uid: number;

  @Expose()
  public readonly write_uid: number;

  @Expose()
  public readonly state: string;
}
