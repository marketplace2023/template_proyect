import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'ir_act_report_xml' })
export class IrActReportXml {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'paperformat_id', type: 'int' })
  public paperformat_id: number;

  @Column({ name: 'model', type: 'varchar' })
  public model: string;

  @Column({ name: 'report_type', type: 'int' })
  public report_type: number;

  @Column({ name: 'report_name', type: 'int' })
  public report_name: number;

  @Column({ name: 'report_file', type: 'int' })
  public report_file: number;

  @Column({ name: 'attachment', type: 'varchar' })
  public attachment: string;

  @Column({ name: 'print_report_name', type: 'int' })
  public print_report_name: number;

  @Column({ name: 'multi', type: 'int' })
  public multi: number;

  @Column({ name: 'attachment_use', type: 'int' })
  public attachment_use: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<IrActReportXml>) {
    Object.assign(this, data);
  }
}
