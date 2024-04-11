import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateFavoritesItemsDto {
  @Expose()
  public id: number;

  @Expose()
  public favorites_items: number;

  @Expose()
  public model: number;

  @Expose()
  public res_id: number;

  @Expose()
  public url: string;
}
