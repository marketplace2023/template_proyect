import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductPublicCategoryDto {
  @Expose()
  public id: number;

  @Expose()
  public website_id: number;

  @Expose()
  public parent_id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public website_meta_og_img: number;

  @Expose()
  public parent_path: number;

  @Expose()
  public website_meta_title: string;

  @Expose()
  public website_meta_description: string;

  @Expose()
  public website_meta_keywords: string;

  @Expose()
  public seo_name: string;

  @Expose()
  public name: string;

  @Expose()
  public website_description: string;
}
