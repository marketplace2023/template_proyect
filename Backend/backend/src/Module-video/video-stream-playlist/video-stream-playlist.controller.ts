import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { VideoStreamPlaylistService } from './video-stream-playlist.service';
import { VideoStreamPlaylist } from './entities/video-stream-playlist.entity';
import { CreateVideoStreamPlaylistDto } from './dto/created-video-stream-playlist.dto';
import { UpdatedVideoStreamPlaylistDto } from './dto/updated-video-stream-playlist.dto';
@Controller('video-stream-playlist')
export class VideoStreamPlaylistController {
  constructor(
    private readonly videoStreamPlaylistService: VideoStreamPlaylistService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<VideoStreamPlaylist[]> {
    return await this.videoStreamPlaylistService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaVideoStreamPlaylistDto: CreateVideoStreamPlaylistDto,
  ): Promise<VideoStreamPlaylist> {
    return await this.videoStreamPlaylistService.create(
      createaVideoStreamPlaylistDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VideoStreamPlaylist> {
    return await this.videoStreamPlaylistService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedVideoStreamPlaylistDto: UpdatedVideoStreamPlaylistDto,
    @Param('id') id: string,
  ): Promise<VideoStreamPlaylist> {
    return await this.videoStreamPlaylistService.updated(
      +id,
      updatedVideoStreamPlaylistDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.videoStreamPlaylistService.deleted(+id);
  }
}
