import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductTaxesRelDto {
  @Expose()
  public id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public tax_id: number;
}
