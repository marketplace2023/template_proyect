import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSaleRatingDto {
  @Expose()
  public id: number;

  @Expose()
  public customer_id: number;

  @Expose()
  public seller_id: number;

  @Expose()
  public marketplace_shop_id: number;

  @Expose()
  public rating: number;

  @Expose()
  public review: string;

  @Expose()
  public stockpline_id: number;
}
