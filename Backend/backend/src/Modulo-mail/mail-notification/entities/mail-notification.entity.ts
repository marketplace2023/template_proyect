import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail_notification' })
export class MailNotification {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'author_id', type: 'int' })
  public author_id: number;

  @Column({ name: 'mail_message_id', type: 'int' })
  public mail_message_id: number;

  @Column({ name: 'mail_mail_id', type: 'int' })
  public mail_mail_id: number;

  @Column({ name: 'res_partner_id', type: 'int' })
  public res_partner_id: number;

  @Column({ name: 'notification_type', type: 'varchar' })
  public notification_type: string;

  @Column({ name: 'notification_status', type: 'varchar' })
  public notification_status: string;

  @Column({ name: 'failure_type', type: 'varchar' })
  public failure_type: string;

  @Column({ name: 'failure_reason', type: 'varchar' })
  public failure_reason: string;

  @Column({ name: 'is_read', type: 'tinyint' })
  public is_read: boolean;

  @Column({ name: 'read_date', type: 'date' })
  public read_date: Date;

  @Column({ name: 'sms_id', type: 'int' })
  public sms_id: number;

  @Column({ name: 'sms_number', type: 'varchar' })
  public sms_number: string;

  @Column({ name: 'letter_id', type: 'int' })
  public letter_id: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<MailNotification>) {
    Object.assign(this, data);
  }
}
