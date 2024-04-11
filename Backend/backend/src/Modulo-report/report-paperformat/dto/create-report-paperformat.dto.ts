import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateReportPaperformatDto {
  @Expose()
  public id: number;

  @Expose()
  public page_height: number;

  @Expose()
  public page_width: number;

  @Expose()
  public header_spacing: number;

  @Expose()
  public dpi: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public name: string;

  @Expose()
  public format: string;

  @Expose()
  public orientation: string;

  @Expose()
  public default: boolean;

  @Expose()
  public header_line: boolean;

  @Expose()
  public disable_shrinking: boolean;

  @Expose()
  public margin_top: number;

  @Expose()
  public margin_bottom: number;

  @Expose()
  public margin_left: number;

  @Expose()
  public margin_right: number;
}
