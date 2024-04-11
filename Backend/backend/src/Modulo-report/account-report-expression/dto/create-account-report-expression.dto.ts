import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAccountReportExpressionDto {
  @Expose()
  public id: number;

  @Expose()
  public report_line_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public label: string;

  @Expose()
  public engine: string;

  @Expose()
  public formula: string;

  @Expose()
  public subformula: string;

  @Expose()
  public date_scope: string;

  @Expose()
  public figure_type: string;

  @Expose()
  public carryover_target: string;

  @Expose()
  public green_on_positive: boolean;

  @Expose()
  public blank_if_zero: boolean;

  @Expose()
  public auditable: boolean;
}
