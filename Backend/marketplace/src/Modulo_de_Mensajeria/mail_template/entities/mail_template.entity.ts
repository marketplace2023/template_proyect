import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity({ name: 'mail_template' })
  export class MailTemplate {
    @PrimaryGeneratedColumn({ name: 'id' })
    public id: number;
  
    @Column({ name: 'model_id', type: 'int' })
    public model_id: number;
  
    @Column({ name: 'report_template', type: 'int' })
    public report_template: number;
  
    @Column({ name: 'mail_server_id', type: 'int' })
    public mail_server_id: number;
  
    @Column({ name: 'ref_ir_act_window', type: 'int' })
    public ref_ir_act_window: number;
  
    @Column({ name: 'create_uid', type: 'int' })
    public create_uid: number;
  
    @Column({ name: 'write_uid', type: 'int' })
    public write_uid: number;
  
    @Column({ name: 'template_fs', type: 'varchar' })
    public template_fs: string;
  
    @Column({ name: 'lang', type: 'varchar' })
    public lang: string;
  
    @Column({ name: 'model', type: 'varchar' })
    public model: string;
  
    @Column({ name: 'email_from', type: 'varchar' })
    public email_from: string;
  
    @Column({ name: 'email_to', type: 'varchar' })
    public email_to: string;
  
    @Column({ name: 'partner_to', type: 'varchar' })
    public partner_to: string;
  
    @Column({ name: 'email_cc', type: 'varchar' })
    public email_cc: string;
  
    @Column({ name: 'reply_to', type: 'varchar' })
    public reply_to: string;
  
    @Column({ name: 'scheduled_date', type: 'varchar' })
    public scheduled_date: string;
  
    @Column({ name: 'name', type: 'varchar' })
    public name: string;
  
    @Column({ name: 'description', type: 'varchar' })
    public description: string;
  
    @Column({ name: 'subject', type: 'varchar' })
    public subject: string;
  
    @Column({ name: 'body_html', type: 'varchar' })
    public body_html: string;
  
    @Column({ name: 'report_name', type: 'varchar' })
    public report_name: string;
  
    @Column({ name: 'active', type: 'tinyint' })
    public active: boolean;
  
    @Column({ name: 'use_default_to', type: 'tinyint' })
    public use_default_to: boolean;
  
    @Column({ name: 'auto_delete', type: 'tinyint' })
    public auto_delete: boolean;
  
    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deletedAt: Date;
  
    constructor(data: Partial<MailTemplate>) {
      Object.assign(this, data);
    }
  }
  