import { VideoStream } from 'src/Module-video/video-stream/entities/video-stream.entity';
import { ResUsers } from 'src/Modulo-users/res-users/entities/res-users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'video_stream_view' })
export class VideoStreamView {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'video_stream_id', type: 'int' })
  public video_stream_id: number;

  @Column({ name: 'user_id', type: 'int' })
  public user_id: number;

  @Column({ name: 'view_date', type: 'date' })
  public view_date: Date;

  @Column({ name: 'view_duration', type: 'int' })
  public view_duration: number;

  @OneToMany(() => VideoStream, (videoStream) => videoStream.videoStreamViews)
  public videoStreams: VideoStream;

  //---------------------------------RELACIONES------------------------------------
  @ManyToOne(() => VideoStream, (videoStream) => videoStream.videoStreamViews)
  @JoinColumn({ name: 'video_stream_id' })
  public videoStream: VideoStream;

  @ManyToOne(() => ResUsers, (resUser) => resUser.videoStreamViews)
  @JoinColumn({ name: 'user_id' })
  public resUsers: ResUsers;
  //-----------------------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<VideoStreamView>) {
    Object.assign(this, data);
  }
}
