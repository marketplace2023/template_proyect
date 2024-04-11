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
import { VideoStream } from './entities/video-stream.entity';
import { VideoStreamService } from './video-stream.service';
import { CreateVideoStreamDto } from './dto/created-video-stream.dto';
import { UpdatedVideoStreamDto } from './dto/updated-video-stream.dto';
@Controller('video-stream')
export class VideoStreamController {
  constructor(private readonly videoStreamService: VideoStreamService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<VideoStream[]> {
    return await this.videoStreamService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaVideoStreamDto: CreateVideoStreamDto,
  ): Promise<VideoStream> {
    return await this.videoStreamService.create(createaVideoStreamDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VideoStream> {
    return await this.videoStreamService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedVideoStreamDto: UpdatedVideoStreamDto,
    @Param('id') id: string,
  ): Promise<VideoStream> {
    return await this.videoStreamService.updated(+id, updatedVideoStreamDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.videoStreamService.deleted(+id);
  }
}
