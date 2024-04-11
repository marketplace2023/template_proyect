import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateUomCategoryDto {
  @Expose()
  public id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public name: string;

  @Expose()
  public is_pos_groupable: boolean;

  @Expose()
  public productPublicCategory_id: number;
}
