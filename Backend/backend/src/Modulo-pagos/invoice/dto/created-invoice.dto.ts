import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedInvoiceDto {
  @Expose()
  public id: number;

  @Expose()
  public number: string;

  @Expose()
  public date_invoice: Date;

  @Expose()
  public partner_id: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public type: string;

  @Expose()
  public state: string;

  @Expose()
  public payment_term_id: number;

  @Expose()
  public amount_total: number;

  @Expose()
  public amount_tax: number;

  @Expose()
  public amount_untaxed: number;

  @Expose()
  public invoice_line_ids: number;

  @Expose()
  public company_id: number;

  @Expose()
  public payment_id: number;
}
