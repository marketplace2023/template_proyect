import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedPosConfigPosPaymentMethodRelDto {
  @Expose()
  public id: number;

  @Expose()
  public pos_config_id: number;

  @Expose()
  public payment_method_id: number;

  @Expose()
  public position: number;

  @Expose()
  public active: boolean;
}
