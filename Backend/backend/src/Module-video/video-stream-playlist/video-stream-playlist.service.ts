import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VideoStreamPlaylistNotFoundException } from './error/video-stream-playlist-not-found.exception';
import { VideoStreamPlaylist } from './entities/video-stream-playlist.entity';
import { UpdatedVideoStreamPlaylistDto } from './dto/updated-video-stream-playlist.dto';
import { CreateVideoStreamPlaylistDto } from './dto/created-video-stream-playlist.dto';
import { Repository } from 'typeorm';

@Injectable()
export class VideoStreamPlaylistService {
  constructor(
    @InjectRepository(VideoStreamPlaylist)
    private readonly videoStreamPlaylistRepository: Repository<VideoStreamPlaylist>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<VideoStreamPlaylist[] | undefined> {
    const offset = (page - 1) * perPage;
    const videoStreamPlaylist = await this.videoStreamPlaylistRepository
      .createQueryBuilder('videoStreamPlaylist')
      .take(perPage)
      .skip(offset)
      .getMany();
    return videoStreamPlaylist;
  }

  async create(
    createVideoStreamPlaylistDto: CreateVideoStreamPlaylistDto,
  ): Promise<VideoStreamPlaylist> {
    const videoStreamPlaylist = new VideoStreamPlaylist(
      createVideoStreamPlaylistDto,
    );
    return await this.videoStreamPlaylistRepository.save(videoStreamPlaylist);
  }

  async findOne(id: number): Promise<VideoStreamPlaylist> {
    const videoStreamPlaylist = await this.videoStreamPlaylistRepository
      .createQueryBuilder('videoStreamPlaylist')
      .where('videoStreamPlaylist.id = :id', { id })
      .getOne();
    if (!videoStreamPlaylist) {
      throw new VideoStreamPlaylistNotFoundException();
    }
    return videoStreamPlaylist;
  }

  async updated(
    id: number,
    updatedVideoStreamPlaylistDto: UpdatedVideoStreamPlaylistDto,
  ): Promise<VideoStreamPlaylist> {
    const videoStreamPlaylist = await this.videoStreamPlaylistRepository
      .createQueryBuilder('videoStreamPlaylist')
      .where('videoStreamPlaylist.id = :id', { id })
      .getOne();
    if (!videoStreamPlaylist) {
      throw new VideoStreamPlaylistNotFoundException();
    }
    Object.assign(videoStreamPlaylist, updatedVideoStreamPlaylistDto);
    return await this.videoStreamPlaylistRepository.save(videoStreamPlaylist);
  }

  async deleted(id: number): Promise<void> {
    const videoStreamPlaylist = await this.videoStreamPlaylistRepository
      .createQueryBuilder('videoStreamPlaylist')
      .where('videoStreamPlaylist.id = :id', { id })
      .getOne();
    if (!videoStreamPlaylist) {
      throw new VideoStreamPlaylistNotFoundException();
    }
    await this.videoStreamPlaylistRepository.softRemove(videoStreamPlaylist);
    console.log('ideoStreamPlaylist Eliminado');
  }
}
