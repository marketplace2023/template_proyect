import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity({ name: 'mail_shortcode' })
  export class MailShortcode {
    @PrimaryGeneratedColumn({ name: 'id' })
    public id: number;
  
    @Column({ name: 'create_uid', type: 'int' })
    public create_uid: number;
  
    @Column({ name: 'write_uid', type: 'int' })
    public write_uid: number;
  
    @Column({ name: 'source', type: 'varchar' })
    public source: string;
  
    @Column({ name: 'description', type: 'varchar' })
    public description: string;
  
    @Column({ name: 'substitution', type: 'varchar' })
    public substitution: string;
  
    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deletedAt: Date;
  
    constructor(data: Partial<MailShortcode>) {
      Object.assign(this, data);
    }
  }
  