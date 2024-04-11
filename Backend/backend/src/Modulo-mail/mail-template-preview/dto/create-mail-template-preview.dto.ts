import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailTemplatePreviewDto {
  @Expose()
  public id: number;

  @Expose()
  public mail_template_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public resource_ref: string;

  @Expose()
  public lang: string;

  @Expose()
  public error_msg: string;
}
