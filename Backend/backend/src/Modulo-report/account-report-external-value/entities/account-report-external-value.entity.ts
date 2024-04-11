import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Double,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'account_report_External_value' })
export class AccountReportExternalValue {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'target_report_expression_id', type: 'int' })
  public target_report_expression_id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'foreign_vat_fiscal_position_id', type: 'int' })
  public foreign_vat_fiscal_position_id: number;

  @Column({ name: 'carryover_origin_report_line_id', type: 'int' })
  public carryover_origin_report_line_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'carryover_origin_expression_label', type: 'varchar' })
  public carryover_origin_expression_label: string;

  @Column({ name: 'date_date', type: 'date' })
  public date_date: Date;

  @Column({ name: 'value', type: 'double' })
  public value: Double;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountReportExternalValue>) {
    Object.assign(this, data);
  }
}
