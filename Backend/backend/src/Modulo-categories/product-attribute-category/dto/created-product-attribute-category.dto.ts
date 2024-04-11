import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedProductAttributeCategoryDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public parent_id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public color: string;

  @Expose()
  public icon: string;

  @Expose()
  public website_published: boolean;

  @Expose()
  public description: string;
}
