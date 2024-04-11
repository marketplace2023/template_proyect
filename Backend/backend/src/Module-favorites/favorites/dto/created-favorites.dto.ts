import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateFavoritesDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public url: string;
}
