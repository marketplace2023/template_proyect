import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductsSupplierDto {
  @Expose()
  public id: number;

  @Expose()
  public partner_id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public company_id: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public product_tmpl_id: number;

  @Expose()
  public delay: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public product_name: string;

  @Expose()
  public product_code: string;

  @Expose()
  public date_start: Date;

  @Expose()
  public date_end: Date;

  @Expose()
  public min_qty: number;

  @Expose()
  public price: number;
}
