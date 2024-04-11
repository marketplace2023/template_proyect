import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedAccountInvoiceLineDto {
  @Expose()
  public id: number;

  @Expose()
  public invoice_id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public quantity: number;

  @Expose()
  public price_unit: number;

  @Expose()
  public discount: number;

  @Expose()
  public tax_ids: number;

  @Expose()
  public name: string;

  @Expose()
  public payment_id: number;
}
