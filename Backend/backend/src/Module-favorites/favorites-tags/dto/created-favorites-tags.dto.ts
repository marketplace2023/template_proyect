import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateFavoritesTagsDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public color: string;

  @Expose()
  public favorite_id: number;
}
