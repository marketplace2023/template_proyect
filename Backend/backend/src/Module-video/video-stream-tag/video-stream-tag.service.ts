import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VideoStreamTagNotFoundException } from './error/video-stream-tag-not-found.exception';
import { VideoStreamTag } from './entities/video-stream-tag.entity';
import { Repository } from 'typeorm';
import { CreateVideoStreamTagDto } from './dto/created-video-stream-tag.dto';
import { UpdatedVideoStreamTagDto } from './dto/updated-video-stream-tag.dto';

@Injectable()
export class VideoStreamTagService {
  constructor(
    @InjectRepository(VideoStreamTag)
    private readonly videoStreamTagRepository: Repository<VideoStreamTag>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<VideoStreamTag[] | undefined> {
    const offset = (page - 1) * perPage;
    const videoStreamTag = await this.videoStreamTagRepository
      .createQueryBuilder('videoStreamTag')
      .take(perPage)
      .skip(offset)
      .getMany();
    return videoStreamTag;
  }

  async create(
    createVideoStreamTagDto: CreateVideoStreamTagDto,
  ): Promise<VideoStreamTag> {
    const videoStreamTag = new VideoStreamTag(createVideoStreamTagDto);
    return await this.videoStreamTagRepository.save(videoStreamTag);
  }

  async findOne(id: number): Promise<VideoStreamTag> {
    const videoStreamTag = await this.videoStreamTagRepository
      .createQueryBuilder('videoStreamTag')
      .where('videoStreamTag.id = :id', { id })
      .getOne();
    if (!videoStreamTag) {
      throw new VideoStreamTagNotFoundException();
    }
    return videoStreamTag;
  }

  async updated(
    id: number,
    updatedVideoStreamTagDto: UpdatedVideoStreamTagDto,
  ): Promise<VideoStreamTag> {
    const videoStreamTag = await this.videoStreamTagRepository
      .createQueryBuilder('videoStreamTag')
      .where('videoStreamTag.id = :id', { id })
      .getOne();
    if (!videoStreamTag) {
      throw new VideoStreamTagNotFoundException();
    }
    Object.assign(videoStreamTag, updatedVideoStreamTagDto);
    return await this.videoStreamTagRepository.save(videoStreamTag);
  }

  async deleted(id: number): Promise<void> {
    const videoStreamTag = await this.videoStreamTagRepository
      .createQueryBuilder('videoStreamTag')
      .where('videoStreamTag.id = :id', { id })
      .getOne();
    if (!videoStreamTag) {
      throw new VideoStreamTagNotFoundException();
    }
    await this.videoStreamTagRepository.softRemove(videoStreamTag);
    console.log('ideoStreamTag Eliminado');
  }
}
