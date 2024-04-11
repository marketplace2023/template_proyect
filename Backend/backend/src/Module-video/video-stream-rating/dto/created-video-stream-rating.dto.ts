import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateVideoStreamRatingDto {
  @Expose()
  public id: number;

  @Expose()
  public video_id: number;

  @Expose()
  public user_id: number;

  @Expose()
  public rating: number;
}
