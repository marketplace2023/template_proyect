import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAccountJournalDto {
  @Expose()
  public id: number;

  @Expose()
  public code: string;

  @Expose()
  public name: string;

  @Expose()
  public type: string;

  @Expose()
  public company_id: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public default_debit_account_id: number;

  @Expose()
  public default_credit_account_id: number;

  @Expose()
  public active: boolean;

  @Expose()
  public payment_id: number;
}
