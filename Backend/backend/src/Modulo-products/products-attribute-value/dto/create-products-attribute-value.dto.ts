import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductsAttributeValueDto {
  @Expose()
  public id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public attribute_id: number;

  @Expose()
  public product_attribute_id: number;

  @Expose()
  public product_tmpl_id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public color: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public html_color: string;

  @Expose()
  public name: string;

  @Expose()
  public is_custom: boolean;
}
