import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity({ name: 'mail_template_preview' })
  export class MailTemplatePreview {
    @PrimaryGeneratedColumn({ name: 'id' })
    public id: number;
  
    @Column({ name: 'mail_template_id', type: 'int' })
    public mail_template_id: number;
  
    @Column({ name: 'create_uid', type: 'int' })
    public create_uid: number;
  
    @Column({ name: 'write_uid', type: 'int' })
    public write_uid: number;
  
    @Column({ name: 'resource_ref', type: 'varchar' })
    public resource_ref: string;
  
    @Column({ name: 'lang', type: 'varchar' })
    public lang: string;
  
    @Column({ name: 'error_msg', type: 'varchar' })
    public error_msg: string;
  
    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deletedAt: Date;
  
    constructor(data: Partial<MailTemplatePreview>) {
      Object.assign(this, data);
    }
  }
  