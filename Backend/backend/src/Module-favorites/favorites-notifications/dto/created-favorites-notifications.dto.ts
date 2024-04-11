import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateFavoritesNotificationsDto {
  @Expose()
  public id: number;

  @Expose()
  public favorite_id: number;

  @Expose()
  public user_id: number;

  @Expose()
  public type: string;

  @Expose()
  public message: string;

  @Expose()
  public is_read: boolean;
}
