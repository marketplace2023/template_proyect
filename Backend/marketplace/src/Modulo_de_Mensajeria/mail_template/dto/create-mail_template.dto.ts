import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailTemplateDto {
  @Expose()
  public id: number;

  @Expose()
  public model_id: number;

  @Expose()
  public report_template: number;

  @Expose()
  public mail_server_id: number;

  @Expose()
  public ref_ir_act_window: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public template_fs: string;

  @Expose()
  public lang: string;

  @Expose()
  public model: string;

  @Expose()
  public email_from: string;

  @Expose()
  public email_to: string;

  @Expose()
  public partner_to: string;

  @Expose()
  public email_cc: string;

  @Expose()
  public reply_to: string;

  @Expose()
  public scheduled_date: string;

  @Expose()
  public name: string;

  @Expose()
  public description: string;

  @Expose()
  public subject: string;

  @Expose()
  public body_html: string;

  @Expose()
  public report_name: string;

  @Expose()
  public active: boolean;

  @Expose()
  public use_default_to: boolean;

  @Expose()
  public auto_delete: boolean;
}
