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
import { VideoStreamEmbedService } from './video-stream-embed.service';
import { VideoStreamEmbed } from './entities/video-stream-embed.entity';
import { CreateVideoStreamEmbedDto } from './dto/created-video-stream-embed.dto';
import { UpdatedVideoStreamEmbedDto } from './dto/updated-video-stream-embed.dto';
@Controller('video-stream-embed')
export class VideoStreamEmbedController {
  constructor(
    private readonly videoStreamEmbedService: VideoStreamEmbedService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<VideoStreamEmbed[]> {
    return await this.videoStreamEmbedService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createVideoStreamEmbedDto: CreateVideoStreamEmbedDto,
  ): Promise<VideoStreamEmbed> {
    return await this.videoStreamEmbedService.create(createVideoStreamEmbedDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VideoStreamEmbed> {
    return await this.videoStreamEmbedService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedVideoStreamEmbedDto: UpdatedVideoStreamEmbedDto,
    @Param('id') id: string,
  ): Promise<VideoStreamEmbed> {
    return await this.videoStreamEmbedService.updated(
      +id,
      updatedVideoStreamEmbedDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.videoStreamEmbedService.deleted(+id);
  }
}
