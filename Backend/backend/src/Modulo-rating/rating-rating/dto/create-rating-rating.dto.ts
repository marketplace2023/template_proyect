import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateRatingRatingDto {
  @Expose()
  public id: number;

  @Expose()
  public res_model_id: number;

  @Expose()
  public res_id: number;

  @Expose()
  public parent_res_model_id: number;

  @Expose()
  public parent_res_id: number;

  @Expose()
  public rated_partner_id: number;

  @Expose()
  public partner_id: number;

  @Expose()
  public message_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public res_name: string;

  @Expose()
  public res_model: string;

  @Expose()
  public parent_res_name: string;

  @Expose()
  public parent_res_model: string;

  @Expose()
  public rating_text: string;

  @Expose()
  public access_token: string;

  @Expose()
  public feedback: string;

  @Expose()
  public is_internal: boolean;

  @Expose()
  public consumed: boolean;

  @Expose()
  public rating: number;

  @Expose()
  public publisher_id: number;

  @Expose()
  public publisher_comment: string;

  @Expose()
  public publisher_datetime: Date;
}
