import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductPackagingDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public product_tmpl_id: number;

  @Expose()
  public height: number;

  @Expose()
  public width: number;

  @Expose()
  public depth: number;

  @Expose()
  public weight: number;

  @Expose()
  public volume: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;
}
