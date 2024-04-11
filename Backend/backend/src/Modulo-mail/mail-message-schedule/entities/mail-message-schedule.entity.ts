import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail_message_schedule' })
export class MailMessageSchedule {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'mail_message_id', type: 'int' })
  public mail_message_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'notification_parameters', type: 'varchar' })
  public notification_parameters: string;

  @Column({ name: 'scheduled_datetime', type: 'date' })
  public scheduled_datetime: Date;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<MailMessageSchedule>) {
    Object.assign(this, data);
  }
}
