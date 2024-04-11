import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedProductCategoryImageDto {
  @Expose()
  public id: number;

  @Expose()
  public product_category_id: number;

  @Expose()
  public image: string;

  @Expose()
  public sequence: number;

  @Expose()
  public posCategory_id: number;

  @Expose()
  public productPublicCategory_id: number;

  @Expose()
  public stockStorage_id: number;
}
