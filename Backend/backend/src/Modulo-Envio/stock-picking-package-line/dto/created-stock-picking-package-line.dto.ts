import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateStockPickingPackageLineDto {
  @Expose()
  public id: number;

  @Expose()
  public picking_id: number;

  @Expose()
  public package_id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public product_uom_qty: number;

  @Expose()
  public product_uom: string;

  @Expose()
  public product_description: string;

  @Expose()
  public product_barcode: string;

  @Expose()
  public state: string;
}
