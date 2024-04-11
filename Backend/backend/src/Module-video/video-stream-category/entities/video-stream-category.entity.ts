import { VideoStreamChannel } from 'src/Module-video/video-stream-channel/entities/video-stream-channel.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'video_stream_category' })
export class VideoStreamCategory {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'icon', type: 'varchar' })
  public icon: string;
  //-------------------------------------------------------------
  @OneToMany(
    () => VideoStreamChannel,
    (videoStreamChannel) => videoStreamChannel.videoStreamCategorys,
  )
  public videoStreamChannels: VideoStreamChannel;
  //--------------------------------------------------------------
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<VideoStreamCategory>) {
    Object.assign(this, data);
  }
}
