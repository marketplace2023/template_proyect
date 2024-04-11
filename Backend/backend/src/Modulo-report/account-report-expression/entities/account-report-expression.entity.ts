import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'account_report_Expression' })
export class AccountReportExpression {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'report_line_id', type: 'int' })
  public report_line_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'label', type: 'varchar' })
  public label: string;

  @Column({ name: 'engine', type: 'varchar' })
  public engine: string;

  @Column({ name: 'formula', type: 'varchar' })
  public formula: string;

  @Column({ name: 'subformula', type: 'varchar' })
  public subformula: string;

  @Column({ name: 'date_scope', type: 'varchar' })
  public date_scope: string;

  @Column({ name: 'figure_type', type: 'varchar' })
  public figure_type: string;

  @Column({ name: 'carryover_target', type: 'varchar' })
  public carryover_target: string;

  @Column({ name: 'green_on_positive', type: 'tinyint' })
  public green_on_positive: boolean;

  @Column({ name: 'blank_if_zero', type: 'tinyint' })
  public blank_if_zero: boolean;

  @Column({ name: 'auditable', type: 'tinyint' })
  public auditable: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountReportExpression>) {
    Object.assign(this, data);
  }
}
