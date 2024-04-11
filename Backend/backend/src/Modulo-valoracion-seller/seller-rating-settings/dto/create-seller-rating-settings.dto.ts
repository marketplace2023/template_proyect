import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSellerRatingSettingsDto {
  @Expose()
  public id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public auto_publish: number;

  @Expose()
  public publish_mode: number;

  @Expose()
  public rating_min: number;

  @Expose()
  public rating_max: number;

  @Expose()
  public allow_guest: number;

  @Expose()
  public allow_comment: string;

  @Expose()
  public order_confirmation: number;
}
