import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductProductDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public default_code: string;

  @Expose()
  public product_tmpl_id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public active: boolean;

  @Expose()
  public sale_ok: boolean;

  @Expose()
  public purchase_ok: boolean;

  @Expose()
  public type: string;

  @Expose()
  public categ_id: number;

  @Expose()
  public uom_id: number;

  @Expose()
  public list_price: number;

  @Expose()
  public volume: string;

  @Expose()
  public weight: string;

  @Expose()
  public image: number;

  @Expose()
  public description: number;

  @Expose()
  public attribute_value_ids: number;

  @Expose()
  public productsProduct_id: number;
}
