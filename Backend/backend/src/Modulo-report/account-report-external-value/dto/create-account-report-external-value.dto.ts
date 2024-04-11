import { Exclude, Expose } from 'class-transformer';
import { Double } from 'typeorm';

@Exclude()
export class CreateAccountReportExternalValueDto {
  @Expose()
  public id: number;

  @Expose()
  public target_report_expression_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public foreign_vat_fiscal_position_id: number;

  @Expose()
  public carryover_origin_report_line_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public name: string;

  @Expose()
  public carryover_origin_expression_label: string;

  @Expose()
  public date_date: Date;

  @Expose()
  public value: Double;
}
