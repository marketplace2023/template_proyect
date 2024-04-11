import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSaleCommissionDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public description: string;

  @Expose()
  public marketplace_shop_id: string;

  @Expose()
  public product_ids: number;

  @Expose()
  public seller_ids: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public percentage: number;

  @Expose()
  public fixed_amount: number;

  @Expose()
  public active: boolean;

  @Expose()
  public stockpline_id: number;
}
