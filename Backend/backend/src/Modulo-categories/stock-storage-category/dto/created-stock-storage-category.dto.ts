import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedStockStorageCategoryDto {
  @Expose()
  public id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public name: string;

  @Expose()
  public allow_new_product: string;

  @Expose()
  public max_weight: number;

  @Expose()
  public stockStorage_id: number;
}
