import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductSupplierinfoDto {
  @Expose()
  public id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public supplier_id: number;

  @Expose()
  public price: number;

  @Expose()
  public delay: number;

  @Expose()
  public min_quantity: number;

  @Expose()
  public max_quantity: number;

  @Expose()
  public product_code: string;

  @Expose()
  public active: boolean;
}
