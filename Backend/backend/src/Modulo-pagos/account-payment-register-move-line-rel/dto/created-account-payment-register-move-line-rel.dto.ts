import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedAccountPaymentRegisterMoveLineRelDto {
  @Expose()
  public id: number;

  @Expose()
  public payment_register_id: number;

  @Expose()
  public move_line_id: number;

  @Expose()
  public amount: number;
}
