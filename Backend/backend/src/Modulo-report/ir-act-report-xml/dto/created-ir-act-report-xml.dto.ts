import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateIrActReportXmlDto {
  @Expose()
  public id: number;

  @Expose()
  public paperformat_id: number;

  @Expose()
  public model: string;

  @Expose()
  public report_type: number;

  @Expose()
  public report_name: number;

  @Expose()
  public report_file: number;

  @Expose()
  public attachment: string;

  @Expose()
  public print_report_name: number;

  @Expose()
  public multi: number;

  @Expose()
  public attachment_use: number;
}
