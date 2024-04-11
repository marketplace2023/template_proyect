import { VideoStreamCategory } from 'src/Module-video/video-stream-category/entities/video-stream-category.entity';
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

@Entity({ name: 'video_stream_rating' })
export class VideoStreamRating {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'video_id', type: 'int' })
  public video_id: number;

  @Column({ name: 'user_id', type: 'int' })
  public user_id: number;

  @Column({ name: 'rating', type: 'int' })
  public rating: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  //-------------------------------------------------------------------
  @ManyToOne(() => ResUsers, (resUsers) => resUsers.videoStreamRatings)
  @JoinColumn({ name: 'user_id' })
  public resUsers: ResUsers;

  @ManyToOne(() => VideoStream, (videoStream) => videoStream.videoStreamRatings)
  @JoinColumn({ name: 'user_id' })
  public videoStreams: VideoStream;
  //---------------------------------------------------------------------

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<VideoStreamRating>) {
    Object.assign(this, data);
  }
}
