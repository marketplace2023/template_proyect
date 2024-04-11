import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail_channel_member' })
export class MailChannelMember {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'guest_id', type: 'int' })
  public guest_id: number;

  @Column({ name: 'channel_id', type: 'int' })
  public channel_id: number;

  @Column({ name: 'fetched_message_id', type: 'int' })
  public fetched_message_id: number;

  @Column({ name: 'seen_message_id', type: 'int' })
  public seen_message_id: number;

  @Column({ name: 'rtc_inviting_session_id:', type: 'int' })
  public rtc_inviting_session_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'custom_channel_name', type: 'varchar' })
  public custom_channel_name: string;

  @Column({ name: 'fold_state', type: 'varchar' })
  public fold_state: string;

  @Column({ name: 'is_minimized', type: 'tinyint' })
  public is_minimized: boolean;

  @Column({ name: 'is_pinned', type: 'tinyint' })
  public is_pinned: boolean;

  @Column({ name: 'last_interest_dt', type: 'date' })
  public last_interest_dt: Date;

  @Column({ name: 'last_seen_dt', type: 'date' })
  public last_seen_dt: Date;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<MailChannelMember>) {
    Object.assign(this, data);
  }
}
