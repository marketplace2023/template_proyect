import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedPaymentOrderDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public code: string;

  @Expose()
  public description: string;

  @Expose()
  public partner_id: number;

  @Expose()
  public payment_method_id: number;

  @Expose()
  public payment_term_id: number;

  @Expose()
  public amount: number;

  @Expose()
  public due_date: string;

  @Expose()
  public state: string;

  @Expose()
  public payment_id: number;
}
