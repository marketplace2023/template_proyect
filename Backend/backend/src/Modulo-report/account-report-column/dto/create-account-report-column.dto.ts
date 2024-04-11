import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAccountReportColumnDto {
  @Expose()
  public id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public report_id: number;

  @Expose()
  public custom_audit_action_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public expression_label: string;

  @Expose()
  public figure_type: string;

  @Expose()
  public name: string;

  @Expose()
  public sortable: boolean;

  @Expose()
  public blank_if_zero: boolean;
}
