import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedAccountPaymentAccountBankStatementLineRelDto {
  @Expose()
  public id: number;

  @Expose()
  public payment_id: number;

  @Expose()
  public bank_statement_line_id: number;

  @Expose()
  public amount: number;
}
