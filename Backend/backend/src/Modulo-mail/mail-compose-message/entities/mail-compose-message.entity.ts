import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail_compose_message' })
export class MailComposeMessage {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'template_id', type: 'int' })
  public template_id: number;

  @Column({ name: 'parent_id', type: 'int' })
  public parent_id: number;

  @Column({ name: 'author_id', type: 'int' })
  public author_id: number;

  @Column({ name: 'res_id', type: 'int' })
  public res_id: number;

  @Column({ name: 'subtype_id', type: 'int' })
  public subtype_id: number;

  @Column({ name: 'mail_activity_type_id', type: 'int' })
  public mail_activity_type_id: number;

  @Column({ name: 'mail_server_id', type: 'int' })
  public mail_server_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'lang', type: 'varchar' })
  public lang: string;

  @Column({ name: 'subject', type: 'varchar' })
  public subject: string;

  @Column({ name: 'email_layout_xmlid', type: 'varchar' })
  public email_layout_xmlid: string;

  @Column({ name: 'email_from', type: 'varchar' })
  public email_from: string;

  @Column({ name: 'composition_mode', type: 'varchar' })
  public composition_mode: string;

  @Column({ name: 'model', type: 'varchar' })
  public model: string;

  @Column({ name: 'record_name', type: 'varchar' })
  public record_name: string;

  @Column({ name: 'message_type', type: 'varchar' })
  public message_type: string;

  @Column({ name: 'reply_to', type: 'varchar' })
  public reply_to: string;

  @Column({ name: 'body', type: 'varchar' })
  public body: string;

  @Column({ name: 'active_domain', type: 'varchar' })
  public active_domain: string;

  @Column({ name: 'email_add_signature', type: 'tinyint' })
  public email_add_signature: boolean;

  @Column({ name: 'use_active_domain', type: 'tinyint' })
  public use_active_domain: boolean;

  @Column({ name: 'is_log', type: 'tinyint' })
  public is_log: boolean;

  @Column({ name: 'notify', type: 'tinyint' })
  public notify: boolean;

  @Column({ name: 'reply_to_force_new', type: 'tinyint' })
  public reply_to_force_new: boolean;

  @Column({ name: 'auto_delete', type: 'tinyint' })
  public auto_delete: boolean;

  @Column({ name: 'auto_delete_message', type: 'tinyint' })
  public auto_delete_message: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<MailComposeMessage>) {
    Object.assign(this, data);
  }
}
