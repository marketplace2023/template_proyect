import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductProductTemplateDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public description: string;

  @Expose()
  public category_id: number;

  @Expose()
  public marketplace_shop_id: number;

  @Expose()
  public price: number;

  @Expose()
  public image: number;

  @Expose()
  public stock: number;

  @Expose()
  public weight: number;

  @Expose()
  public dimensions: string;

  @Expose()
  public available_in_stock: boolean;

  @Expose()
  public active: boolean;

  @Expose()
  public sale_ok: boolean;

  @Expose()
  public purchase_ok: boolean;

  @Expose()
  public variant_ids: number;
}
