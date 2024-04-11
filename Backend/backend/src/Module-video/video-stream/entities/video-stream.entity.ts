import { VideoStreamChannel } from 'src/Module-video/video-stream-channel/entities/video-stream-channel.entity';
import { VideoStreamComment } from 'src/Module-video/video-stream-comment/entities/video-stream-comment.entity';
import { VideoStreamEmbed } from 'src/Module-video/video-stream-embed/entities/video-stream-embed.entity';
import { VideoStreamRating } from 'src/Module-video/video-stream-rating/entities/video-stream-riting.entity';
import { VideoStreamSubscription } from 'src/Module-video/video-stream-subscription/entities/video-stream-subscription.entity';
import { VideoStreamTag } from 'src/Module-video/video-stream-tag/entities/video-stream-tag.entity';
import { VideoStreamView } from 'src/Module-video/video-stream-view/entities/video-stream-view.entity';
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

@Entity({ name: 'video_stream' })
export class VideoStream {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'duration', type: 'float' })
  public duration: number;

  @Column({ name: 'format', type: 'varchar' })
  public format: string;

  @Column({ name: 'size', type: 'varchar' })
  public size: string;

  @Column({ name: 'channel_id', type: 'int' })
  public channel_id: number;

  @Column({ name: 'category_id', type: 'int' })
  public category_id: number;

  @Column({ name: 'tag_ids', type: 'int' })
  public tag_ids: number;

  @Column({ name: 'view_ids', type: 'int' })
  public view_ids: number;

  @Column({ name: 'published_on', type: 'date' })
  public published_on: Date;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  //---------------------------------RELACIONES------------------------------------
  @ManyToOne(
    () => VideoStreamTag,
    (videoStreamTag) => videoStreamTag.videoStreams,
  )
  @JoinColumn({ name: 'tag_ids' })
  public videoStreamTags: VideoStreamTag;

  @ManyToOne(
    () => VideoStreamView,
    (videoStreamView) => videoStreamView.videoStreams,
  )
  @JoinColumn({ name: 'View_id' })
  public videoStreamViews: VideoStreamView;

  @OneToMany(() => VideoStream, (videoStream) => videoStream.videoStreamViews)
  public videoStreams: VideoStream;

  @ManyToOne(
    () => VideoStreamChannel,
    (videoStreamChannel) => videoStreamChannel.videoStreams,
  )
  @JoinColumn({ name: 'Channel_id' })
  public videoStreamChannels: VideoStreamChannel;

  @OneToMany(
    () => VideoStreamComment,
    (videoStreamComment) => videoStreamComment.videoStreams,
  )
  public videoStreamComments: VideoStream;

  @OneToMany(
    () => VideoStreamEmbed,
    (videoStreamEmbed) => videoStreamEmbed.videoStreams,
  )
  public videoStreamEmbeds: VideoStream;

  @OneToMany(
    () => VideoStreamRating,
    (videoStreamRating) => videoStreamRating.videoStreams,
  )
  public videoStreamRatings: VideoStreamRating;

  @OneToMany(
    () => VideoStreamSubscription,
    (videoStreamSubscription) => videoStreamSubscription.videoStreams,
  )
  public videoStreamSubscriptions: VideoStreamSubscription;
  //--------------------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<VideoStream>) {
    Object.assign(this, data);
  }
}
