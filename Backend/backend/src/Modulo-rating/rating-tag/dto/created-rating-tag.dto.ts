import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateRatingTagDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public rating_id: number;
}
