import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'account_report' })
export class AccountReport {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'root_report_id', type: 'int' })
  public root_report_id: number;

  @Column({ name: 'chart_template_id', type: 'int' })
  public chart_template_id: number;

  @Column({ name: 'country_id', type: 'int' })
  public country_id: number;

  @Column({ name: 'load_more_limit', type: 'int' })
  public load_more_limit: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'availability_condition', type: 'varchar' })
  public availability_condition: string;

  @Column({ name: 'default_opening_date_filter', type: 'varchar' })
  public default_opening_date_filter: string;

  @Column({ name: 'filter_multi_company', type: 'varchar' })
  public filter_multi_company: string;

  @Column({ name: 'filter_hierarchy', type: 'varchar' })
  public filter_hierarchy: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'only_tax_exigible', type: 'tinyint' })
  public only_tax_exigible: boolean;

  @Column({ name: 'search_bar', type: 'tinyint' })
  public search_bar: boolean;

  @Column({ name: 'filter_date_range', type: 'tinyint' })
  public filter_date_range: boolean;

  @Column({ name: 'filter_show_draft', type: 'tinyint' })
  public filter_show_draft: boolean;

  @Column({ name: 'filter_unreconciled', type: 'tinyint' })
  public filter_unreconciled: boolean;

  @Column({ name: 'filter_unfold_all', type: 'tinyint' })
  public filter_unfold_all: boolean;

  @Column({ name: 'filter_period_comparison', type: 'tinyint' })
  public filter_period_comparison: boolean;

  @Column({ name: 'filter_growth_comparison', type: 'tinyint' })
  public filter_growth_comparison: boolean;

  @Column({ name: 'filter_journals', type: 'tinyint' })
  public filter_journals: boolean;

  @Column({ name: 'filter_analytic', type: 'tinyint' })
  public filter_analytic: boolean;

  @Column({ name: 'filter_account_type', type: 'tinyint' })
  public filter_account_type: boolean;

  @Column({ name: 'filter_partner', type: 'tinyint' })
  public filter_partner: boolean;

  @Column({ name: 'filter_fiscal_position', type: 'tinyint' })
  public filter_fiscal_position: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountReport>) {
    Object.assign(this, data);
  }
}
