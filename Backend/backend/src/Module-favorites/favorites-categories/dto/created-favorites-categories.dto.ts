import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateFavoritesCategoriesDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public parent_id: number;

  @Expose()
  public favorites_id: number;
}
