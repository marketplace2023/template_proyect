import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateRatingLineDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public rated_object: number;

  @Expose()
  public rating_scale: number;

  @Expose()
  public rated_by: number;

  @Expose()
  public date: Date;

  @Expose()
  public rating_values: number;

  @Expose()
  public overall_rating: number;

  @Expose()
  public rating_id: number;
}
