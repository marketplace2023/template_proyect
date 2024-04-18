import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAccountMoveLineDto {
  @Expose()
  public id: number;

  @Expose()
  public move_id: number;

  @Expose()
  public account_id: number;

  @Expose()
  public credit: number;

  @Expose()
  public debit: number;

  @Expose()
  public amount_currency: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public partner_id: number;

  @Expose()
  public analytic_account_id: number;

  @Expose()
  public analytic_tag_ids: number;

  @Expose()
  public name: string;

  @Expose()
  public date: Date;

  @Expose()
  public ref: string;

  @Expose()
  public payment_id: number;
}
