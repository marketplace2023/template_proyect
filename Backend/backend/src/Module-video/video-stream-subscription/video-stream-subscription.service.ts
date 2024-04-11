import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VideoStreamSubscription } from './entities/video-stream-subscription.entity';
import { Repository } from 'typeorm';
import { CreateVideoStreamSubscriptionDto } from './dto/created-video-stream-subscription.dto';
import { VideoStreamSubscriptionNotFoundException } from './error/video-stream-subscription.not-found.exception';
import { UpdatedVideoStreamSubscriptionDto } from './dto/updated-video-stream-subscription.dto';

@Injectable()
export class VideoStreamSubscriptionService {
  constructor(
    @InjectRepository(VideoStreamSubscription)
    private readonly videoStreamSubscriptionRepository: Repository<VideoStreamSubscription>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<VideoStreamSubscription[] | undefined> {
    const offset = (page - 1) * perPage;
    const videoStreamSubscription = await this.videoStreamSubscriptionRepository
      .createQueryBuilder('videoStreamSubscription')
      .take(perPage)
      .skip(offset)
      .getMany();
    return videoStreamSubscription;
  }

  async create(
    createVideoStreamSubscriptionDto: CreateVideoStreamSubscriptionDto,
  ): Promise<VideoStreamSubscription> {
    const videoStreamSubscription = new VideoStreamSubscription(
      createVideoStreamSubscriptionDto,
    );
    return await this.videoStreamSubscriptionRepository.save(
      videoStreamSubscription,
    );
  }

  async findOne(id: number): Promise<VideoStreamSubscription> {
    const videoStreamSubscription = await this.videoStreamSubscriptionRepository
      .createQueryBuilder('videoStreamSubscription')
      .where('videoStreamSubscription.id = :id', { id })
      .getOne();
    if (!videoStreamSubscription) {
      throw new VideoStreamSubscriptionNotFoundException();
    }
    return videoStreamSubscription;
  }

  async updated(
    id: number,
    updatedVideoStreamSubscriptionDto: UpdatedVideoStreamSubscriptionDto,
  ): Promise<VideoStreamSubscription> {
    const videoStreamSubscription = await this.videoStreamSubscriptionRepository
      .createQueryBuilder('videoStreamSubscription')
      .where('videoStreamSubscription.id = :id', { id })
      .getOne();
    if (!videoStreamSubscription) {
      throw new VideoStreamSubscriptionNotFoundException();
    }
    Object.assign(videoStreamSubscription, updatedVideoStreamSubscriptionDto);
    return await this.videoStreamSubscriptionRepository.save(
      videoStreamSubscription,
    );
  }

  async deleted(id: number): Promise<void> {
    const videoStreamSubscription = await this.videoStreamSubscriptionRepository
      .createQueryBuilder('videoStreamSubscription')
      .where('videoStreamSubscription.id = :id', { id })
      .getOne();
    if (!videoStreamSubscription) {
      throw new VideoStreamSubscriptionNotFoundException();
    }
    await this.videoStreamSubscriptionRepository.softRemove(
      videoStreamSubscription,
    );
    console.log('videoStreamSubscription Eliminado');
  }
}
