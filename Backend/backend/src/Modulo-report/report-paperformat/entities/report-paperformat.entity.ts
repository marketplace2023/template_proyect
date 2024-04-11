import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'report_paperformat' })
export class ReportPaperformat {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'page_height', type: 'int' })
  public page_height: number;

  @Column({ name: 'page_width', type: 'int' })
  public page_width: number;

  @Column({ name: 'header_spacing', type: 'int' })
  public header_spacing: number;

  @Column({ name: 'dpi', type: 'int' })
  public dpi: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'format', type: 'varchar' })
  public format: string;

  @Column({ name: 'orientation', type: 'varchar' })
  public orientation: string;

  @Column({ name: 'default', type: 'tinyint' })
  public default: boolean;

  @Column({ name: 'header_line', type: 'tinyint' })
  public header_line: boolean;

  @Column({ name: 'disable_shrinking', type: 'tinyint' })
  public disable_shrinking: boolean;

  @Column({ name: 'margin_top', type: 'int' })
  public margin_top: number;

  @Column({ name: 'margin_bottom', type: 'int' })
  public margin_bottom: number;

  @Column({ name: 'margin_left', type: 'int' })
  public margin_left: number;

  @Column({ name: 'margin_right', type: 'int' })
  public margin_right: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ReportPaperformat>) {
    Object.assign(this, data);
  }
}
