import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity({ name: 'mail_alias' })
  export class MailAlias {
    @PrimaryGeneratedColumn({ name: 'id' })
    public id: number;
  
    @Column({ name: 'alias_model_id', type: 'int' })
    public alias_model_id: number;
  
    @Column({ name: 'alias_user_id', type: 'int' })
    public alias_user_id: number;
  
    @Column({ name: 'alias_force_thread_id', type: 'int' })
    public alias_force_thread_id: number;
  
    @Column({ name: 'alias_parent_model_id', type: 'int' })
    public alias_parent_model_id: number;
  
    @Column({ name: 'alias_parent_thread_id', type: 'int' })
    public alias_parent_thread_id: number;
  
    @Column({ name: 'create_uid', type: 'int' })
    public create_uid: number;
  
    @Column({ name: 'write_uid', type: 'int' })
    public write_uid: number;
  
    @Column({ name: 'alias_name', type: 'varchar', length: 255 })
    public alias_name: string;
  
    @Column({ name: 'alias_contact', type: 'varchar', length: 255 })
    public alias_contact: string;
  
    @Column({ name: 'alias_bounced_content', type: 'varchar', length: 255 })
    public alias_bounced_content: string;
  
    @Column({ name: 'alias_defaults', type: 'varchar', length: 255 })
    public alias_defaults: string;
  
    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deletedAt: Date;
  
    constructor(data: Partial<MailAlias>) {
      Object.assign(this, data);
    }
  }
  