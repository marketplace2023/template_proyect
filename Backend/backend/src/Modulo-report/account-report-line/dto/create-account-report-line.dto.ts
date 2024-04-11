import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAccountReportLineDto {
  @Expose()
  public id: number;

  @Expose()
  public report_id: number;

  @Expose()
  public hierarchy_level: number;

  @Expose()
  public parent_id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public action_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public groupby: string;

  @Expose()
  public code: string;

  @Expose()
  public name: string;

  @Expose()
  public foldable: boolean;

  @Expose()
  public print_on_new_page: boolean;

  @Expose()
  public hide_if_zero: boolean;
}
