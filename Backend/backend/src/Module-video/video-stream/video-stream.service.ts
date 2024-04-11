import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VideoStream } from './entities/video-stream.entity';
import { Repository } from 'typeorm';
import { CreateVideoStreamDto } from './dto/created-video-stream.dto';
import { VideoStreamNotFoundException } from './error/video-stream-not-found.exception';
import { UpdatedVideoStreamDto } from './dto/updated-video-stream.dto';

@Injectable()
export class VideoStreamService {
  constructor(
    @InjectRepository(VideoStream)
    private readonly videoStreamRepository: Repository<VideoStream>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<VideoStream[] | undefined> {
    const offset = (page - 1) * perPage;
    const videoStream = await this.videoStreamRepository
      .createQueryBuilder('videoStream')
      .take(perPage)
      .skip(offset)
      .getMany();
    return videoStream;
  }

  async create(
    createVideoStreamDto: CreateVideoStreamDto,
  ): Promise<VideoStream> {
    const videoStream = new VideoStream(createVideoStreamDto);
    return await this.videoStreamRepository.save(videoStream);
  }

  async findOne(id: number): Promise<VideoStream> {
    const videoStream = await this.videoStreamRepository
      .createQueryBuilder('videoStream')
      .where('videoStream.id = :id', { id })
      .getOne();
    if (!videoStream) {
      throw new VideoStreamNotFoundException();
    }
    return videoStream;
  }

  async updated(
    id: number,
    updatedVideoStreamDto: UpdatedVideoStreamDto,
  ): Promise<VideoStream> {
    const videoStream = await this.videoStreamRepository
      .createQueryBuilder('videoStream')
      .where('videoStream.id = :id', { id })
      .getOne();
    if (!videoStream) {
      throw new VideoStreamNotFoundException();
    }
    Object.assign(videoStream, updatedVideoStreamDto);
    return await this.videoStreamRepository.save(videoStream);
  }

  async deleted(id: number): Promise<void> {
    const videoStream = await this.videoStreamRepository
      .createQueryBuilder('videoStream')
      .where('videoStream.id = :id', { id })
      .getOne();
    if (!videoStream) {
      throw new VideoStreamNotFoundException();
    }
    await this.videoStreamRepository.softRemove(videoStream);
    console.log('favorites Users Eliminado');
  }
}
