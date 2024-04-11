import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductPricelistItemDto {
  @Expose()
  public id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public pricelist_id: number;

  @Expose()
  public fixed_price: number;

  @Expose()
  public percent_price: number;

  @Expose()
  public price: number;

  @Expose()
  public discount: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public active: boolean;
}
