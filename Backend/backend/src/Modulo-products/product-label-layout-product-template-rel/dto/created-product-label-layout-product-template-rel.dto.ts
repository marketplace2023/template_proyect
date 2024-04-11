import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductLabelLayoutProductTemplateRelDto {
  @Expose()
  public id: number;

  @Expose()
  public product_label_layout_id: number;

  @Expose()
  public product_tmpl_id: number;
}
