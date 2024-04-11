import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSellerRatingDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public rating: number;

  @Expose()
  public comment: string;

  @Expose()
  public date: Date;

  @Expose()
  public partner_id: number;

  @Expose()
  public sale_order_id: number;

  @Expose()
  public state: boolean;

  @Expose()
  public published: number;

  @Expose()
  public active: boolean;
}
