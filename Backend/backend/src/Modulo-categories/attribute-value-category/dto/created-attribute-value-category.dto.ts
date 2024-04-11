import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedAttributeValueCategoryDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public description: string;

  @Expose()
  public parent_id: number;

  @Expose()
  public active: boolean;

  @Expose()
  public color: string;

  @Expose()
  public product_category_image_id: number;
}
