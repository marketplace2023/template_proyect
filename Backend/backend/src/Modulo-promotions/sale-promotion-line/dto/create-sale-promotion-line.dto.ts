import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSalePromotionLineDto {
  @Expose()
  public id: number;

  @Expose()
  public promotion_id: number;

  @Expose()
  public name: string;

  @Expose()
  public sequence: number;

  @Expose()
  public product_id: number;

  @Expose()
  public product_category_id: number;

  @Expose()
  public product_tmpl_id: number;

  @Expose()
  public product_variant_ids: number;

  @Expose()
  public product_uom_id: number;

  @Expose()
  public price_discount: number;

  @Expose()
  public discount_type: number;

  @Expose()
  public rule_min_quantity: number;

  @Expose()
  public rule_min_amount: number;
}
