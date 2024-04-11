import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedAccountTaxSaleAdvancePaymentInvRelDto {
  @Expose()
  public id: number;

  @Expose()
  public tax_id: number;

  @Expose()
  public invoice_id: number;

  @Expose()
  public amount: number;

  @Expose()
  public payment_id: number;
}
