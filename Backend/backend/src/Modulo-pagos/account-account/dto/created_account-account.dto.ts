import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAccountAccountDto {
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
  public parent_id: number;

  @Expose()
  public child_ids: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public balance: number;

  @Expose()
  public reconcile: boolean;

  @Expose()
  public active: boolean;

  @Expose()
  public payment_id: number;
}
