import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { VideoStreamCategory } from './entities/video-stream-category.entity';
import { CreateVideoStreamCategoryDto } from './dto/created-video-stream-category.dto';
import { VideoStreamCategoryNotFoundException } from './error/video-stream-category-not-found.exception';
import { UpdatedVideoStreamCategoryDto } from './dto/updated-video-stream-category.dto';

@Injectable()
export class VideoStreamCategoryService {
  constructor(
    @InjectRepository(VideoStreamCategory)
    private readonly videoStreamCategoryRepository: Repository<VideoStreamCategory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<VideoStreamCategory[] | undefined> {
    const offset = (page - 1) * perPage;
    const videoStreamCategory = await this.videoStreamCategoryRepository
      .createQueryBuilder('videoStreamCategory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return videoStreamCategory;
  }

  async create(
    createVideoStreamCategoryDto: CreateVideoStreamCategoryDto,
  ): Promise<VideoStreamCategory> {
    const videoStreamCategory = new VideoStreamCategory(
      createVideoStreamCategoryDto,
    );
    return await this.videoStreamCategoryRepository.save(videoStreamCategory);
  }

  async findOne(id: number): Promise<VideoStreamCategory> {
    const videoStreamCategory = await this.videoStreamCategoryRepository
      .createQueryBuilder('videoStreamCategory')
      .where('videoStreamCategory.id = :id', { id })
      .getOne();
    if (!videoStreamCategory) {
      throw new VideoStreamCategoryNotFoundException();
    }
    return videoStreamCategory;
  }

  async updated(
    id: number,
    updatedVideoStreamCategoryDto: UpdatedVideoStreamCategoryDto,
  ): Promise<VideoStreamCategory> {
    const videoStreamCategory = await this.videoStreamCategoryRepository
      .createQueryBuilder('videoStreamCategory')
      .where('videoStreamCategory.id = :id', { id })
      .getOne();
    if (!videoStreamCategory) {
      throw new VideoStreamCategoryNotFoundException();
    }
    Object.assign(videoStreamCategory, updatedVideoStreamCategoryDto);
    return await this.videoStreamCategoryRepository.save(videoStreamCategory);
  }

  async deleted(id: number): Promise<void> {
    const videoStreamCategory = await this.videoStreamCategoryRepository
      .createQueryBuilder('videoStreamCategory')
      .where('videoStreamCategory.id = :id', { id })
      .getOne();
    if (!videoStreamCategory) {
      throw new VideoStreamCategoryNotFoundException();
    }
    await this.videoStreamCategoryRepository.softRemove(videoStreamCategory);
    console.log('ideoStreamCategory Eliminado');
  }
}
