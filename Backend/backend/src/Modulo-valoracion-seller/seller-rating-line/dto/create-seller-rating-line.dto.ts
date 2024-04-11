import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSellerRatingLineDto {
  @Expose()
  public id: number;

  @Expose()
  public seller_rating_id: number;

  @Expose()
  public rating: number;

  @Expose()
  public comment: string;

  @Expose()
  public date: Date;
}
