import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'account_report_column' })
export class AccountReportColumn {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'report_id', type: 'int' })
  public report_id: number;

  @Column({ name: 'custom_audit_action_id', type: 'int' })
  public custom_audit_action_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'expression_label', type: 'varchar' })
  public expression_label: string;

  @Column({ name: 'figure_type', type: 'varchar' })
  public figure_type: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'sortable', type: 'tinyint' })
  public sortable: boolean;

  @Column({ name: 'blank_if_zero', type: 'tinyint' })
  public blank_if_zero: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountReportColumn>) {
    Object.assign(this, data);
  }
}
