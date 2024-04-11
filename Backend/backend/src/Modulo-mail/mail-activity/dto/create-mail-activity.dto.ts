import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailActivityDto {
  @Expose()
  public id: number;

  @Expose()
  public res_model_id: number;

  @Expose()
  public res_id: number;

  @Expose()
  public activity_type_id: number;

  @Expose()
  public user_id: number;

  @Expose()
  public request_partner_id: number;

  @Expose()
  public recommended_activity_type_id: number;

  @Expose()
  public previous_activity_type_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public res_model: string;

  @Expose()
  public res_name: string;

  @Expose()
  public summary: string;

  @Expose()
  public date_deadline: Date;

  @Expose()
  public note: string;

  @Expose()
  public automated: boolean;

  @Expose()
  public calendar_event_id: number;
}
