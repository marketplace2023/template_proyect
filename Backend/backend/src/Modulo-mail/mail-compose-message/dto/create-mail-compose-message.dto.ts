import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailComposeMessageDto {
  @Expose()
  public id: number;

  @Expose()
  public template_id: number;

  @Expose()
  public parent_id: number;

  @Expose()
  public author_id: number;

  @Expose()
  public res_id: number;

  @Expose()
  public subtype_id: number;

  @Expose()
  public mail_activity_type_id: number;

  @Expose()
  public mail_server_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public lang: string;

  @Expose()
  public subject: string;

  @Expose()
  public email_layout_xmlid: string;

  @Expose()
  public email_from: string;

  @Expose()
  public composition_mode: string;

  @Expose()
  public model: string;

  @Expose()
  public record_name: string;

  @Expose()
  public message_type: string;

  @Expose()
  public reply_to: string;

  @Expose()
  public body: string;

  @Expose()
  public active_domain: string;

  @Expose()
  public email_add_signature: boolean;

  @Expose()
  public use_active_domain: boolean;

  @Expose()
  public is_log: boolean;

  @Expose()
  public notify: boolean;

  @Expose()
  public reply_to_force_new: boolean;

  @Expose()
  public auto_delete: boolean;

  @Expose()
  public auto_delete_message: boolean;
}
