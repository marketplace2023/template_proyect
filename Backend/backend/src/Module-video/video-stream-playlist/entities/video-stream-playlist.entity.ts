import { VideoStreamChannel } from 'src/Module-video/video-stream-channel/entities/video-stream-channel.entity';
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

@Entity({ name: 'video_stream_playlist' })
export class VideoStreamPlaylist {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'video_stream_ids', type: 'int' })
  public video_stream_ids: number;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  //-------------------------------------------------------------------
  @ManyToOne(
    () => VideoStreamChannel,
    (videoStreamChannel) => videoStreamChannel.videoStreamPlaylists,
  )
  @JoinColumn({ name: 'video_stream_ids' })
  public videoStreamChannels: VideoStreamChannel;
  //---------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<VideoStreamPlaylist>) {
    Object.assign(this, data);
  }
}
