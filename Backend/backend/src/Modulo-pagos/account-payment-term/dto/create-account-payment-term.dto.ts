import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAccountPaymentTermDto {
  @Expose()
  public id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public name: string;

  @Expose()
  public note: string;

  @Expose()
  public active: boolean;

  @Expose()
  public display_on_invoice: boolean;
}
