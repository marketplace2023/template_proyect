import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail_channel' })
export class MailChannel {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'message_main_attachment_id', type: 'int' })
  public message_main_attachment_id: number;

  @Column({ name: 'group_public_id ', type: 'int' })
  public group_public_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'channel_type', type: 'varchar' })
  public channel_type: string;

  @Column({ name: 'default_display_mode', type: 'varchar' })
  public default_display_mode: string;

  @Column({ name: 'uuid', type: 'varchar' })
  public uuid: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<MailChannel>) {
    Object.assign(this, data);
  }
}
