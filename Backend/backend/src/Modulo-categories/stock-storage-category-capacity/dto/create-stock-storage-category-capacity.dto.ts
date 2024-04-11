import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockStorageCategoryCapacityDto {
  @Expose()
  public id: number;

  @Expose()
  public storage_category_id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public package_type_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public quantity: number;
}
