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

@Entity({ name: 'video_stream_comment' })
export class VideoStreamComment {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'video_id', type: 'int' })
  public video_id: number;

  @Column({ name: 'user_id', type: 'int' })
  public user_id: number;

  @Column({ name: 'content', type: 'varchar' })
  public content: string;

  //------------------------------------------------------------------------
  @ManyToOne(() => ResUsers, (resUsers) => resUsers.videoStreamComments)
  @JoinColumn({ name: 'user_id' })
  public resUserss: ResUsers;

  @ManyToOne(
    () => VideoStream,
    (videoStream) => videoStream.videoStreamComments,
  )
  @JoinColumn({ name: 'video_id' })
  public videoStreams: VideoStream;
  //-------------------------------------------------------------------------
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<VideoStreamComment>) {
    Object.assign(this, data);
  }
}
