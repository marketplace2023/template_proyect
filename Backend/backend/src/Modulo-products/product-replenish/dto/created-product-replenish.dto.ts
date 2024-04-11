import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductReplenishDto {
  @Expose()
  public id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public quantity: number;

  @Expose()
  public date: Date;

  @Expose()
  public reason: string;
}
