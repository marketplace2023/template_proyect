import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSaleWishDto {
  @Expose()
  public id: number;

  @Expose()
  public customer_id: number;

  @Expose()
  public marketplace_shop_id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public stockpline_id: number;
}
