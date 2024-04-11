import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VideoStreamView } from './entities/video-stream-view.entity';
import { Repository } from 'typeorm';
import { CreateVideoStreamViewDto } from './dto/created-video-stream-view.dto';
import { VideoStreamViewNotFoundException } from './error/video-stream-view-not-found.exception';
import { UpdatedVideoStreamViewDto } from './dto/updated-video-stream-view.dto';

@Injectable()
export class VideoStreamViewService {
  constructor(
    @InjectRepository(VideoStreamView)
    private readonly videoStreamViewRepository: Repository<VideoStreamView>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<VideoStreamView[] | undefined> {
    const offset = (page - 1) * perPage;
    const videoStreamView = await this.videoStreamViewRepository
      .createQueryBuilder('videoStreamView')
      .take(perPage)
      .skip(offset)
      .getMany();
    return videoStreamView;
  }

  async create(
    createVideoStreamViewDto: CreateVideoStreamViewDto,
  ): Promise<VideoStreamView> {
    const videoStreamView = new VideoStreamView(createVideoStreamViewDto);
    return await this.videoStreamViewRepository.save(videoStreamView);
  }

  async findOne(id: number): Promise<VideoStreamView> {
    const videoStreamView = await this.videoStreamViewRepository
      .createQueryBuilder('videoStreamView')
      .where('videoStreamView.id = :id', { id })
      .getOne();
    if (!videoStreamView) {
      throw new VideoStreamViewNotFoundException();
    }
    return videoStreamView;
  }

  async updated(
    id: number,
    updatedVideoStreamViewDto: UpdatedVideoStreamViewDto,
  ): Promise<VideoStreamView> {
    const videoStreamView = await this.videoStreamViewRepository
      .createQueryBuilder('videoStreamView')
      .where('videoStreamView.id = :id', { id })
      .getOne();
    if (!videoStreamView) {
      throw new VideoStreamViewNotFoundException();
    }
    Object.assign(videoStreamView, updatedVideoStreamViewDto);
    return await this.videoStreamViewRepository.save(videoStreamView);
  }

  async deleted(id: number): Promise<void> {
    const videoStreamView = await this.videoStreamViewRepository
      .createQueryBuilder('videoStreamView')
      .where('videoStreamView.id = :id', { id })
      .getOne();
    if (!videoStreamView) {
      throw new VideoStreamViewNotFoundException();
    }
    await this.videoStreamViewRepository.softRemove(videoStreamView);
    console.log('video Stream View Eliminado');
  }
}
