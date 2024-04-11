import { VideoStreamChannel } from 'src/Module-video/video-stream-channel/entities/video-stream-channel.entity';
import { VideoStream } from 'src/Module-video/video-stream/entities/video-stream.entity';
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

@Entity({ name: 'video_stream_tag' })
export class VideoStreamTag {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'color', type: 'varchar' })
  public color: string;

  @Column({ name: 'channel_id', type: 'int' })
  public channel_id: number;

  @OneToMany(() => VideoStream, (videoStream) => videoStream.videoStreamTags)
  public videoStreams: VideoStream;

  @OneToMany(
    () => VideoStreamChannel,
    (videoStreamChannel) => videoStreamChannel.videoStreamTags,
  )
  public videoStreamChannels: VideoStreamChannel;

  @ManyToOne(
    () => VideoStreamChannel,
    (videoStreamChannel) => videoStreamChannel.videoStreamTag,
  )
  @JoinColumn({ name: 'channel_id' })
  public videoStreamChannel: VideoStreamChannel;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<VideoStreamTag>) {
    Object.assign(this, data);
  }
}
