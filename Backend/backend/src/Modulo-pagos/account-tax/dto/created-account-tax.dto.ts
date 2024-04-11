import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedAccountTaxDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public type: string;

  @Expose()
  public amount: number;

  @Expose()
  public account_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public active: boolean;

  @Expose()
  public payment_id: number;
}
