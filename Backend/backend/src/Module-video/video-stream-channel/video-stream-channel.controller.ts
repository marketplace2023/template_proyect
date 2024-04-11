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
import { VideoStreamChannelService } from './video-stream-channel.service';
import { VideoStreamChannel } from './entities/video-stream-channel.entity';
import { CreateVideoStreamChannelDto } from './dto/created-video-stream-channel.dto';
import { UpdatedVideoStreamChannelDto } from './dto/updated-video-stream-channel.dto';
@Controller('video-stream-channel')
export class VideoStreamChannelController {
  constructor(
    private readonly videoStreamChannelService: VideoStreamChannelService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<VideoStreamChannel[]> {
    return await this.videoStreamChannelService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createVideoStreamChannelDto: CreateVideoStreamChannelDto,
  ): Promise<VideoStreamChannel> {
    return await this.videoStreamChannelService.create(
      createVideoStreamChannelDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VideoStreamChannel> {
    return await this.videoStreamChannelService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedVideoStreamChannelDto: UpdatedVideoStreamChannelDto,
    @Param('id') id: string,
  ): Promise<VideoStreamChannel> {
    return await this.videoStreamChannelService.updated(
      +id,
      updatedVideoStreamChannelDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.videoStreamChannelService.deleted(+id);
  }
}
