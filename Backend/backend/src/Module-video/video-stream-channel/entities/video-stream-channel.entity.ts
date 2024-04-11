import { VideoStreamCategory } from 'src/Module-video/video-stream-category/entities/video-stream-category.entity';
import { VideoStreamPlaylist } from 'src/Module-video/video-stream-playlist/entities/video-stream-playlist.entity';
import { VideoStreamTag } from 'src/Module-video/video-stream-tag/entities/video-stream-tag.entity';
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

@Entity({ name: 'video_stream_channel' })
export class VideoStreamChannel {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'owner_id', type: 'int' })
  public owner_id: number;

  @Column({ name: 'category_id', type: 'int' })
  public category_id: number;

  @Column({ name: 'tag_ids', type: 'int' })
  public tag_ids: number;

  @Column({ name: 'published_on', type: 'date' })
  public published_on: Date;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'icon', type: 'varchar' })
  public icon: string;

  //--------------------------------------------
  @ManyToOne(
    () => VideoStreamTag,
    (videoStreamTag) => videoStreamTag.videoStreamChannels,
  )
  @JoinColumn({ name: 'tag_ids' })
  public videoStreamTags: VideoStreamTag;

  @ManyToOne(
    () => VideoStreamCategory,
    (videoStreamCategory) => videoStreamCategory.videoStreamChannels,
  )
  @JoinColumn({ name: 'category_id' })
  public videoStreamCategorys: VideoStreamCategory;

  @OneToMany(
    () => VideoStream,
    (videoStream) => videoStream.videoStreamChannels,
  )
  public videoStreams: VideoStream;

  @OneToMany(
    () => VideoStreamPlaylist,
    (videoStreamPlaylist) => videoStreamPlaylist.videoStreamChannels,
  )
  public videoStreamPlaylists: VideoStreamPlaylist;

  @OneToMany(
    () => VideoStreamTag,
    (videoStreamTag) => videoStreamTag.videoStreamChannel,
  )
  public videoStreamTag: VideoStreamTag;
  //--------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<VideoStreamChannel>) {
    Object.assign(this, data);
  }
}
