import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAccountReportDto {
  @Expose()
  public id: number;

  @Expose()
  public root_report_id: number;

  @Expose()
  public chart_template_id: number;

  @Expose()
  public country_id: number;

  @Expose()
  public load_more_limit: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public availability_condition: string;

  @Expose()
  public default_opening_date_filter: string;

  @Expose()
  public filter_multi_company: string;

  @Expose()
  public filter_hierarchy: string;

  @Expose()
  public name: string;

  @Expose()
  public only_tax_exigible: boolean;

  @Expose()
  public search_bar: boolean;

  @Expose()
  public filter_date_range: boolean;

  @Expose()
  public filter_show_draft: boolean;

  @Expose()
  public filter_unreconciled: boolean;

  @Expose()
  public filter_unfold_all: boolean;

  @Expose()
  public filter_period_comparison: boolean;

  @Expose()
  public filter_growth_comparison: boolean;

  @Expose()
  public filter_journals: boolean;

  @Expose()
  public filter_analytic: boolean;

  @Expose()
  public filter_account_type: boolean;

  @Expose()
  public filter_partner: boolean;

  @Expose()
  public filter_fiscal_position: boolean;
}
