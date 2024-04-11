import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateDeliveryMethodDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public code: string;

  @Expose()
  public description: string;

  @Expose()
  public price: number;

  @Expose()
  public carrier_id: number;

  @Expose()
  public active: number;
}
