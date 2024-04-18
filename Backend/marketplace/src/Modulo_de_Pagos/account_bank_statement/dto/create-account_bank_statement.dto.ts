import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAccountBankStatementDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public date: Date;

  @Expose()
  public currency_id: number;

  @Expose()
  public balance_start: number;

  @Expose()
  public balance_end: number;

  @Expose()
  public journal_id: number;

  @Expose()
  public transactions_ids: number;

  @Expose()
  public reconciled: boolean;

  @Expose()
  public payment_id: number;
}
