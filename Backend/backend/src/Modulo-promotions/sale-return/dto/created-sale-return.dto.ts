import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSaleReturnDto {
  @Expose()
  public id: number;

  @Expose()
  public sale_order_id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public quantity: number;

  @Expose()
  public reason: string;

  @Expose()
  public state: string;

  @Expose()
  public marketplace_shop_id: number;

  @Expose()
  public return_date: Date;
}
