import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateHrEmployeeCategoryDto {
  @Expose()
  public id: number;

  @Expose()
  public color: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public name: string;

  @Expose()
  public posCategory_id: number;

  @Expose()
  public productPublicCategory_id: number;
}
