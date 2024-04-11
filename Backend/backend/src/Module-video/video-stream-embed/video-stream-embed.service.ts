import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VideoStreamEmbed } from './entities/video-stream-embed.entity';
import { Repository } from 'typeorm';
import { CreateVideoStreamEmbedDto } from './dto/created-video-stream-embed.dto';
import { VideoStreamEmbedNotFoundException } from './error/video-stream-embed-not-found.exception';
import { UpdatedVideoStreamEmbedDto } from './dto/updated-video-stream-embed.dto';

@Injectable()
export class VideoStreamEmbedService {
  constructor(
    @InjectRepository(VideoStreamEmbed)
    private readonly videoStreamEmbedRepository: Repository<VideoStreamEmbed>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<VideoStreamEmbed[] | undefined> {
    const offset = (page - 1) * perPage;
    const videoStreamEmbed = await this.videoStreamEmbedRepository
      .createQueryBuilder('videoStreamEmbed')
      .take(perPage)
      .skip(offset)
      .getMany();
    return videoStreamEmbed;
  }

  async create(
    createVideoStreamEmbedDto: CreateVideoStreamEmbedDto,
  ): Promise<VideoStreamEmbed> {
    const videoStreamEmbed = new VideoStreamEmbed(createVideoStreamEmbedDto);
    return await this.videoStreamEmbedRepository.save(videoStreamEmbed);
  }

  async findOne(id: number): Promise<VideoStreamEmbed> {
    const videoStreamEmbed = await this.videoStreamEmbedRepository
      .createQueryBuilder('videoStreamEmbed')
      .where('videoStreamEmbed.id = :id', { id })
      .getOne();
    if (!videoStreamEmbed) {
      throw new VideoStreamEmbedNotFoundException();
    }
    return videoStreamEmbed;
  }

  async updated(
    id: number,
    updatedVideoStreamEmbedDto: UpdatedVideoStreamEmbedDto,
  ): Promise<VideoStreamEmbed> {
    const videoStreamEmbed = await this.videoStreamEmbedRepository
      .createQueryBuilder('videoStreamEmbed')
      .where('videoStreamEmbed.id = :id', { id })
      .getOne();
    if (!videoStreamEmbed) {
      throw new VideoStreamEmbedNotFoundException();
    }
    Object.assign(videoStreamEmbed, updatedVideoStreamEmbedDto);
    return await this.videoStreamEmbedRepository.save(videoStreamEmbed);
  }

  async deleted(id: number): Promise<void> {
    const videoStreamEmbed = await this.videoStreamEmbedRepository
      .createQueryBuilder('videoStreamEmbed')
      .where('videoStreamEmbed.id = :id', { id })
      .getOne();
    if (!videoStreamEmbed) {
      throw new VideoStreamEmbedNotFoundException();
    }
    await this.videoStreamEmbedRepository.softRemove(videoStreamEmbed);
    console.log('ideoStreamEmbed Eliminado');
  }
}
