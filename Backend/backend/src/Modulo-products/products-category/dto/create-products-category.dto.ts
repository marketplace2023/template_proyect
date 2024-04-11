import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductsCategoryDto {
  @Expose()
  public id: number;

  @Expose()
  public parent_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public name: string;

  @Expose()
  public complete_name: string;

  @Expose()
  public parent_path: string;

  @Expose()
  public removal_strategy_id: number;

  @Expose()
  public packaging_reserve_method: string;

  @Expose()
  public productsCategory_id: number;

  @Expose()
  public posCategory_id: number;

  @Expose()
  public productPublicCategory_id: number;

  @Expose()
  public productCategory_id: number;
}
