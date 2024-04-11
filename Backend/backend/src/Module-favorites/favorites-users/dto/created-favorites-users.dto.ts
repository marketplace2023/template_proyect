import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateFavoritesUsersDto {
  @Expose()
  public id: number;

  @Expose()
  public favorite_id: number;

  @Expose()
  public user_id: number;
}
