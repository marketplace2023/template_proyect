import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VideoStreamRating } from './entities/video-stream-riting.entity';
import { CreateVideoStreamRatingDto } from './dto/created-video-stream-rating.dto';
import { VideoStreamRatingNotFoundException } from './error/video-stream-rating-not-found.exception';
import { UpdatedVideoStreamRatingDto } from './dto/updated-video-stream-rating.dto';

@Injectable()
export class VideoStreamRatingService {
  constructor(
    @InjectRepository(VideoStreamRating)
    private readonly videoStreamRatingRepository: Repository<VideoStreamRating>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<VideoStreamRating[] | undefined> {
    const offset = (page - 1) * perPage;
    const videoStreamRating = await this.videoStreamRatingRepository
      .createQueryBuilder('videoStreamRating')
      .take(perPage)
      .skip(offset)
      .getMany();
    return videoStreamRating;
  }

  async create(
    createVideoStreamRatingDto: CreateVideoStreamRatingDto,
  ): Promise<VideoStreamRating> {
    const videoStreamRating = new VideoStreamRating(createVideoStreamRatingDto);
    return await this.videoStreamRatingRepository.save(videoStreamRating);
  }

  async findOne(id: number): Promise<VideoStreamRating> {
    const videoStreamRating = await this.videoStreamRatingRepository
      .createQueryBuilder('videoStreamRating')
      .where('videoStreamRating.id = :id', { id })
      .getOne();
    if (!videoStreamRating) {
      throw new VideoStreamRatingNotFoundException();
    }
    return videoStreamRating;
  }

  async updated(
    id: number,
    updatedVideoStreamRatingDto: UpdatedVideoStreamRatingDto,
  ): Promise<VideoStreamRating> {
    const videoStreamRating = await this.videoStreamRatingRepository
      .createQueryBuilder('videoStreamRating')
      .where('videoStreamRating.id = :id', { id })
      .getOne();
    if (!videoStreamRating) {
      throw new VideoStreamRatingNotFoundException();
    }
    Object.assign(videoStreamRating, updatedVideoStreamRatingDto);
    return await this.videoStreamRatingRepository.save(videoStreamRating);
  }

  async deleted(id: number): Promise<void> {
    const videoStreamRating = await this.videoStreamRatingRepository
      .createQueryBuilder('videoStreamRating')
      .where('videoStreamRating.id = :id', { id })
      .getOne();
    if (!videoStreamRating) {
      throw new VideoStreamRatingNotFoundException();
    }
    await this.videoStreamRatingRepository.softRemove(videoStreamRating);
    console.log('ideoStreamRating Eliminado');
  }
}
