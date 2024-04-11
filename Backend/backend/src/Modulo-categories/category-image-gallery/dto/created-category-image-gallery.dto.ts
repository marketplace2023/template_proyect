import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedCategoryImageGalleryDto {
  @Expose()
  public id: number;

  @Expose()
  public category_id: number;

  @Expose()
  public image: string;

  @Expose()
  public sequence: number;

  @Expose()
  public website_published: boolean;

  @Expose()
  public product_category_image_id: number;
}
