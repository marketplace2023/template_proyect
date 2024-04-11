import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAccountInvoiceDto {
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
  public invoice_line_ids: number;

  @Expose()
  public state: string;

  @Expose()
  public move_id: number;

  @Expose()
  public payment_term_id: number;

  @Expose()
  public journal_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public amount_total: number;

  @Expose()
  public residual: number;

  @Expose()
  public account_invoice_id: number;

  @Expose()
  public sale_id: number;

  @Expose()
  public stockP_id: number;

  @Expose()
  public orderL_id: number;

  @Expose()
  public producto: number[];

  @Expose()
  public stockpline_id: number;
}
