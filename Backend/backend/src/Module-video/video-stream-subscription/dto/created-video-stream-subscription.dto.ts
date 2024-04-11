import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateVideoStreamSubscriptionDto {
  @Expose()
  public id: number;

  @Expose()
  public user_id: number;

  @Expose()
  public channel_id: number;

  @Expose()
  public start_date: Date;

  @Expose()
  public end_date: Date;

  @Expose()
  public price: number;

  @Expose()
  public payment_method: string;

  @Expose()
  public status: boolean;
}
