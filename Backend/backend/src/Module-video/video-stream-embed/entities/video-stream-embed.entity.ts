import { VideoStream } from 'src/Module-video/video-stream/entities/video-stream.entity';
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

@Entity({ name: 'video_stream_embed' })
export class VideoStreamEmbed {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'video_id', type: 'int' })
  public video_id: number;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  //-------------------------------------------------------------------
  @ManyToOne(() => VideoStream, (videoStream) => videoStream.videoStreamEmbeds)
  @JoinColumn({ name: 'video_id' })
  public videoStreams: VideoStream;
  //---------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<VideoStreamEmbed>) {
    Object.assign(this, data);
  }
}
