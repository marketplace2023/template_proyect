import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailMessageDto {
  @Expose()
  public id: number;

  @Expose()
  public author_guest_id: number;

  @Expose()
  public parent_id: number;

  @Expose()
  public subtype_id: number;

  @Expose()
  public mail_activity_type_id: number;

  @Expose()
  public author_id: number;

  @Expose()
  public mail_server_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public subject: string;

  @Expose()
  public model: string;

  @Expose()
  public record_name: string;

  @Expose()
  public message_type: string;

  @Expose()
  public email_from: string;

  @Expose()
  public message_id: string;

  @Expose()
  public reply_to: string;

  @Expose()
  public email_layout_xmlid: string;

  @Expose()
  public body: string;

  @Expose()
  public is_internal: number;

  @Expose()
  public reply_to_force_new: number;

  @Expose()
  public email_add_signature: number;

  @Expose()
  public date: Date;
}
