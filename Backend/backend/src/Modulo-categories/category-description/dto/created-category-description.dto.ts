import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedCategoryDescriptionDto {
  @Expose()
  public id: number;

  @Expose()
  public category_id: number;

  @Expose()
  public language_id: number;

  @Expose()
  public name: string;

  @Expose()
  public description: string;
}
