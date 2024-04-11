import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatePosPaymentMethodDto {
  @Expose()
  public id: number;

  @Expose()
  public outstanding_account_id: number;

  @Expose()
  public receivable_account_id: number;

  @Expose()
  public journal_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public use_payment_terminal: string;

  @Expose()
  public name: string;

  @Expose()
  public is_cash_count: boolean;

  @Expose()
  public split_transactions: boolean;

  @Expose()
  public active: boolean;
}
