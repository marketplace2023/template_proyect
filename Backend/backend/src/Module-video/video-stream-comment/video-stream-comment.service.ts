import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VideoStreamComment } from './entities/video-stream-comment.entity';
import { Repository } from 'typeorm';
import { CreateVideoStreamCommentDto } from './dto/created-video-stream-comment.dto';
import { VideoStreamCommentNotFoundException } from './error/video-stream-comment-not-found.exception';
import { UpdatedVideoStreamCommentDto } from './dto/updated-video-stream-comment.dto';

@Injectable()
export class VideoStreamCommentService {
  constructor(
    @InjectRepository(VideoStreamComment)
    private readonly videoStreamCommentRepository: Repository<VideoStreamComment>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<VideoStreamComment[] | undefined> {
    const offset = (page - 1) * perPage;
    const videoStreamComment = await this.videoStreamCommentRepository
      .createQueryBuilder('videoStreamComment')
      .take(perPage)
      .skip(offset)
      .getMany();
    return videoStreamComment;
  }

  async create(
    createVideoStreamCommentDto: CreateVideoStreamCommentDto,
  ): Promise<VideoStreamComment> {
    const videoStreamComment = new VideoStreamComment(
      createVideoStreamCommentDto,
    );
    return await this.videoStreamCommentRepository.save(videoStreamComment);
  }

  async findOne(id: number): Promise<VideoStreamComment> {
    const videoStreamComment = await this.videoStreamCommentRepository
      .createQueryBuilder('videoStreamComment')
      .where('videoStreamComment.id = :id', { id })
      .getOne();
    if (!videoStreamComment) {
      throw new VideoStreamCommentNotFoundException();
    }
    return videoStreamComment;
  }

  async updated(
    id: number,
    updatedVideoStreamCommentDto: UpdatedVideoStreamCommentDto,
  ): Promise<VideoStreamComment> {
    const videoStreamComment = await this.videoStreamCommentRepository
      .createQueryBuilder('videoStreamComment')
      .where('videoStreamComment.id = :id', { id })
      .getOne();
    if (!videoStreamComment) {
      throw new VideoStreamCommentNotFoundException();
    }
    Object.assign(videoStreamComment, updatedVideoStreamCommentDto);
    return await this.videoStreamCommentRepository.save(videoStreamComment);
  }

  async deleted(id: number): Promise<void> {
    const videoStreamComment = await this.videoStreamCommentRepository
      .createQueryBuilder('videoStreamComment')
      .where('videoStreamComment.id = :id', { id })
      .getOne();
    if (!videoStreamComment) {
      throw new VideoStreamCommentNotFoundException();
    }
    await this.videoStreamCommentRepository.softRemove(videoStreamComment);
    console.log('ideoStreamComment Eliminado');
  }
}
