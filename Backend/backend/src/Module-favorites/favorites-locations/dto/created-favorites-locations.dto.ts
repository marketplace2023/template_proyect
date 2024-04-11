import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateFavoritesLocationsDto {
  @Expose()
  public id: number;

  @Expose()
  public location_id: number;

  @Expose()
  public user_id: number;

  @Expose()
  public favorites_id: number;
}
