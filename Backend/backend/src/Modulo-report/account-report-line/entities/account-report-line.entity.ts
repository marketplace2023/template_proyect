import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'account_report_line' })
export class AccountReportLine {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'report_id', type: 'int' })
  public report_id: number;

  @Column({ name: 'hierarchy_level', type: 'int' })
  public hierarchy_level: number;

  @Column({ name: 'parent_id', type: 'int' })
  public parent_id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'action_id', type: 'int' })
  public action_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'groupby', type: 'varchar' })
  public groupby: string;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'foldable', type: 'tinyint' })
  public foldable: boolean;

  @Column({ name: 'print_on_new_page', type: 'tinyint' })
  public print_on_new_page: boolean;

  @Column({ name: 'hide_if_zero', type: 'tinyint' })
  public hide_if_zero: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountReportLine>) {
    Object.assign(this, data);
  }
}
