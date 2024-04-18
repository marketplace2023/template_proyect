import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductAttributeDto {
  @Expose()
  public id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public product_id: number;

  @Expose()
  public create_variant: string;

  @Expose()
  public display_type: string;

  @Expose()
  public name: string;
}
