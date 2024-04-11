import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VideoStreamChannelNotFoundException } from './error/video-stream-channel-not-found.exception';
import { VideoStreamChannel } from './entities/video-stream-channel.entity';
import { UpdatedVideoStreamChannelDto } from './dto/updated-video-stream-channel.dto';
import { CreateVideoStreamChannelDto } from './dto/created-video-stream-channel.dto';
import { Repository } from 'typeorm';

@Injectable()
export class VideoStreamChannelService {
  constructor(
    @InjectRepository(VideoStreamChannel)
    private readonly videoStreamChannelRepository: Repository<VideoStreamChannel>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<VideoStreamChannel[] | undefined> {
    const offset = (page - 1) * perPage;
    const videoStreamChannel = await this.videoStreamChannelRepository
      .createQueryBuilder('videoStreamChannel')
      .take(perPage)
      .skip(offset)
      .getMany();
    return videoStreamChannel;
  }

  async create(
    createVideoStreamChannelDto: CreateVideoStreamChannelDto,
  ): Promise<VideoStreamChannel> {
    const videoStreamChannel = new VideoStreamChannel(
      createVideoStreamChannelDto,
    );
    return await this.videoStreamChannelRepository.save(videoStreamChannel);
  }

  async findOne(id: number): Promise<VideoStreamChannel> {
    const videoStreamChannel = await this.videoStreamChannelRepository
      .createQueryBuilder('videoStreamChannel')
      .where('videoStreamChannel.id = :id', { id })
      .getOne();
    if (!videoStreamChannel) {
      throw new VideoStreamChannelNotFoundException();
    }
    return videoStreamChannel;
  }

  async updated(
    id: number,
    updatedVideoStreamChannelDto: UpdatedVideoStreamChannelDto,
  ): Promise<VideoStreamChannel> {
    const videoStreamChannel = await this.videoStreamChannelRepository
      .createQueryBuilder('videoStreamChannel')
      .where('videoStreamChannel.id = :id', { id })
      .getOne();
    if (!videoStreamChannel) {
      throw new VideoStreamChannelNotFoundException();
    }
    Object.assign(videoStreamChannel, updatedVideoStreamChannelDto);
    return await this.videoStreamChannelRepository.save(videoStreamChannel);
  }

  async deleted(id: number): Promise<void> {
    const videoStreamChannel = await this.videoStreamChannelRepository
      .createQueryBuilder('videoStreamChannel')
      .where('videoStreamChannel.id = :id', { id })
      .getOne();
    if (!videoStreamChannel) {
      throw new VideoStreamChannelNotFoundException();
    }
    await this.videoStreamChannelRepository.softRemove(videoStreamChannel);
    console.log('ideoStreamChannel Eliminado');
  }
}
