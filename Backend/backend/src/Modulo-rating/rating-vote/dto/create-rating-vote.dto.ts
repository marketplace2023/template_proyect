import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateRatingVoteDto {
  @Expose()
  public id: number;

  @Expose()
  public vote_date: Date;

  @Expose()
  public rated_object: string;

  @Expose()
  public rating_scale: number;

  @Expose()
  public user: number;

  @Expose()
  public rating_value: number;

  @Expose()
  public feedback: string;

  @Expose()
  public rating_id: number;
}
