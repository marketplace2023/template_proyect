import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductLabelLayoutDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public template: string;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public product_id: number;
}
