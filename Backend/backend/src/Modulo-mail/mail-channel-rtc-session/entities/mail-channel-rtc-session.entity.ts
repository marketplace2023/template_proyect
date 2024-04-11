import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail_channel_rtc_session' })
export class MailChannelRtcSession {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'channel_member_id', type: 'int' })
  public channel_member_id: number;

  @Column({ name: 'channel_id', type: 'int' })
  public channel_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'is_screen_sharing_on', type: 'tinyint' })
  public is_screen_sharing_on: boolean;

  @Column({ name: 'is_camera_on', type: 'tinyint' })
  public is_camera_on: boolean;

  @Column({ name: 'is_muted', type: 'tinyint' })
  public is_muted: boolean;

  @Column({ name: 'is_deaf', type: 'tinyint' })
  public is_deaf: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<MailChannelRtcSession>) {
    Object.assign(this, data);
  }
}
