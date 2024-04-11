import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateRatingScaleDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public ratingValues: number;

  @Expose()
  public sequence: number;

  @Expose()
  public company: string;

  @Expose()
  public rating_id: number;
}
