import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailAliasDto {
  @Expose()
  public id: number;

  @Expose()
  public alias_model_id: number;

  @Expose()
  public alias_user_id: number;

  @Expose()
  public alias_force_thread_id: number;

  @Expose()
  public alias_parent_model_id: number;

  @Expose()
  public alias_parent_thread_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public alias_name: string;

  @Expose()
  public alias_contact: string;

  @Expose()
  public alias_bounced_content: string;

  @Expose()
  public alias_defaults: string;
}
