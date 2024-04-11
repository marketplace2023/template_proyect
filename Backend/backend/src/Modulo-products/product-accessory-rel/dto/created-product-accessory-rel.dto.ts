import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductAccessoryRelDto {
  @Expose()
  public id: number;

  @Expose()
  public product_tmpl_id: number;

  @Expose()
  public product_id: number;
}
