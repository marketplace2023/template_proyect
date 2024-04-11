import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductProductStockTrackConfirmationRelDto {
  @Expose()
  public id: number;

  @Expose()
  public product_id: number;

  @Expose()
  public stock_track_confirmation_id: number;
}
