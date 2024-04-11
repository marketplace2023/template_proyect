import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'report_layout' })
export class ReportLayout {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'view_id', type: 'int' })
  public view_id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'image', type: 'varchar' })
  public image: string;

  @Column({ name: 'pdf', type: 'varchar' })
  public pdf: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ReportLayout>) {
    Object.assign(this, data);
  }
}
