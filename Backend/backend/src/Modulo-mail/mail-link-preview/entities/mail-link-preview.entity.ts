import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail_link_preview' })
export class MailLinkPreview {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'message_id', type: 'int' })
  public message_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'source_url', type: 'varchar' })
  public source_url: string;

  @Column({ name: 'og_type', type: 'varchar' })
  public og_type: string;

  @Column({ name: 'og_title', type: 'varchar' })
  public og_title: string;

  @Column({ name: 'og_image', type: 'varchar' })
  public og_image: string;

  @Column({ name: 'og_mimetype', type: 'varchar' })
  public og_mimetype: string;

  @Column({ name: 'image_mimetype', type: 'varchar' })
  public image_mimetype: string;

  @Column({ name: 'og_description', type: 'varchar' })
  public og_description: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<MailLinkPreview>) {
    Object.assign(this, data);
  }
}
