import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailLinkPreviewDto {
  @Expose()
  public id: number;

  @Expose()
  public message_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public source_url: string;

  @Expose()
  public og_type: string;

  @Expose()
  public og_title: string;

  @Expose()
  public og_image: string;

  @Expose()
  public og_mimetype: string;

  @Expose()
  public image_mimetype: string;

  @Expose()
  public og_description: string;
}
