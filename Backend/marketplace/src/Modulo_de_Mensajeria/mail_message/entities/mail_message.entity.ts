import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity({ name: 'mail_message' })
  export class MailMessage {
    @PrimaryGeneratedColumn({ name: 'id' })
    public id: number;
  
    @Column({ name: 'author_guest_id', type: 'int' })
    public author_guest_id: number;
  
    @Column({ name: 'parent_id', type: 'int' })
    public parent_id: number;
  
    @Column({ name: 'res_id', type: 'int' })
    public res_id: number;
  
    @Column({ name: 'subtype_id', type: 'int' })
    public subtype_id: number;
  
    @Column({ name: 'mail_activity_type_id', type: 'int' })
    public mail_activity_type_id: number;
  
    @Column({ name: 'author_id', type: 'int' })
    public author_id: number;
  
    @Column({ name: 'mail_server_id', type: 'int' })
    public mail_server_id: number;
  
    @Column({ name: 'create_uid', type: 'int' })
    public create_uid: number;
  
    @Column({ name: 'write_uid', type: 'int' })
    public write_uid: number;
  
    @Column({ name: 'subject', type: 'varchar' })
    public subject: string;
  
    @Column({ name: 'model', type: 'varchar' })
    public model: string;
  
    @Column({ name: 'record_name', type: 'varchar' })
    public record_name: string;
  
    @Column({ name: 'message_type', type: 'varchar' })
    public message_type: string;
  
    @Column({ name: 'email_from', type: 'varchar' })
    public email_from: string;
  
    @Column({ name: 'message_id', type: 'varchar' })
    public message_id: string;
  
    @Column({ name: 'reply_to', type: 'varchar' })
    public reply_to: string;
  
    @Column({ name: 'email_layout_xmlid', type: 'varchar' })
    public email_layout_xmlid: string;
  
    @Column({ name: 'body', type: 'varchar' })
    public body: string;
  
    @Column({ name: 'is_internal', type: 'int' })
    public is_internal: number;
  
    @Column({ name: 'reply_to_force_new', type: 'int' })
    public reply_to_force_new: number;
  
    @Column({ name: 'email_add_signature', type: 'int' })
    public email_add_signature: number;
  
    @Column({ name: 'date', type: 'date' })
    public date: Date;
  
    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deletedAt: Date;
  
    constructor(data: Partial<MailMessage>) {
      Object.assign(this, data);
    }
  }
  