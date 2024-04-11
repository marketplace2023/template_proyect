import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductSupplierTaxesRelDto {
  @Expose()
  public id: number;

  @Expose()
  public supplier_id: number;

  @Expose()
  public tax_id: number;
}
