import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateFavoritesGroupsDto {
  @Expose()
  public id: number;

  @Expose()
  public favorite_id: number;

  @Expose()
  public group_id: number;
}
