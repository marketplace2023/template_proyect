import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSaleReportDto {
  @Expose()
  public id: number;

  @Expose()
  public marketplace_shop_id: number;

  @Expose()
  public start_date: Date;

  @Expose()
  public end_date: Date;

  @Expose()
  public total_orders: number;

  @Expose()
  public total_products: number;

  @Expose()
  public total_amount: number;
}
