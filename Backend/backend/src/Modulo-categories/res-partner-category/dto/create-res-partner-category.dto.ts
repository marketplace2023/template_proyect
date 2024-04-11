import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateResPartnerCategoryDto {
  @Expose()
  public id: number;

  @Expose()
  public color: number;

  @Expose()
  public parent_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public parent_path: string;

  @Expose()
  public name: string;

  @Expose()
  public active: number;
}
