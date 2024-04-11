import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail_mail' })
export class MailMail {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'mail_message_id', type: 'int' })
  public mail_message_id: number;

  @Column({ name: 'fetchmail_server_id', type: 'int' })
  public fetchmail_server_id: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'email_cc', type: 'varchar' })
  public email_cc: string;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'failure_type', type: 'varchar' })
  public failure_type: string;

  @Column({ name: 'body_html', type: 'varchar' })
  public body_html: string;

  @Column({ name: 'references', type: 'varchar' })
  public references: string;

  @Column({ name: 'headers', type: 'varchar' })
  public headers: string;

  @Column({ name: 'email_to', type: 'varchar' })
  public email_to: string;

  @Column({ name: 'failure_reason', type: 'varchar' })
  public failure_reason: string;

  @Column({ name: 'is_notification', type: 'tinyint' })
  public is_notification: boolean;

  @Column({ name: 'auto_delete', type: 'tinyint' })
  public auto_delete: boolean;

  @Column({ name: 'to_delete', type: 'tinyint' })
  public to_delete: boolean;

  @Column({ name: 'scheduled_date', type: 'date' })
  public scheduled_date: Date;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<MailMail>) {
    Object.assign(this, data);
  }
}
