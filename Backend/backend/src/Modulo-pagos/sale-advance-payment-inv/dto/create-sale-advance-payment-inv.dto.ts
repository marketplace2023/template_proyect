import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSaleAdvancePaymentInvDto {
  @Expose()
  public id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public deposit_account_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public advance_payment_method: string;

  @Expose()
  public fixed_amount: number;

  @Expose()
  public deduct_down_payments: boolean;

  @Expose()
  public amount: number;
}
