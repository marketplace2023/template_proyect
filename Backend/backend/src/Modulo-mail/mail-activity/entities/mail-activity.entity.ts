import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail_activity' })
export class MailActivity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'res_model_id', type: 'int' })
  public res_model_id: number;

  @Column({ name: 'res_id', type: 'int' })
  public res_id: number;

  @Column({ name: 'activity_type_id', type: 'int' })
  public activity_type_id: number;

  @Column({ name: 'user_id', type: 'int' })
  public user_id: number;

  @Column({ name: 'request_partner_id', type: 'int' })
  public request_partner_id: number;

  @Column({ name: 'recommended_activity_type_id', type: 'int' })
  public recommended_activity_type_id: number;

  @Column({ name: 'previous_activity_type_id', type: 'int' })
  public previous_activity_type_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'res_model', type: 'varchar' })
  public res_model: string;

  @Column({ name: 'res_name', type: 'varchar' })
  public res_name: string;

  @Column({ name: 'summary', type: 'varchar' })
  public summary: string;

  @Column({ name: 'date_deadline', type: 'date' })
  public date_deadline: Date;

  @Column({ name: 'note', type: 'varchar' })
  public note: string;

  @Column({ name: 'automated', type: 'tinyint' })
  public automated: boolean;

  @Column({ name: 'calendar_event_id', type: 'int' })
  public calendar_event_id: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<MailActivity>) {
    Object.assign(this, data);
  }
}
