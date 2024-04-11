import { VideoStream } from 'src/Module-video/video-stream/entities/video-stream.entity';
import { ResUsers } from 'src/Modulo-users/res-users/entities/res-users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'video_stream_subscription' })
export class VideoStreamSubscription {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'user_id', type: 'int' })
  public user_id: number;

  @Column({ name: 'channel_id', type: 'int' })
  public channel_id: number;

  @Column({ name: 'start_date', type: 'int' })
  public start_date: Date;

  @Column({ name: 'end_date', type: 'int' })
  public end_date: Date;

  @Column({ name: 'price', type: 'int' })
  public price: number;

  @Column({ name: 'payment_method', type: 'varchar' })
  public payment_method: string;

  @Column({ name: 'status', type: 'int' })
  public status: boolean;

  //---------------------------------------------------------------------
  @ManyToOne(() => ResUsers, (resUsers) => resUsers.videoStreamSubscriptions)
  @JoinColumn({ name: 'user_id' })
  public resUsers: ResUsers;

  @ManyToOne(
    () => VideoStream,
    (videoStream) => videoStream.videoStreamSubscriptions,
  )
  @JoinColumn({ name: 'channel_id' })
  public videoStreams: VideoStream;
  //---------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<VideoStreamSubscription>) {
    Object.assign(this, data);
  }
}
