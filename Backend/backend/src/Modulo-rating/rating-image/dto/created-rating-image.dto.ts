import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateRatingImageDto {
  @Expose()
  public id: number;

  @Expose()
  public image: string;

  @Expose()
  public rating_id: number;
}
