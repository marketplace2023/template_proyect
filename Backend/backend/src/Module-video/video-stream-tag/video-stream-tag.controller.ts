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
import { VideoStreamTagService } from './video-stream-tag.service';
import { VideoStreamTag } from './entities/video-stream-tag.entity';
import { CreateVideoStreamTagDto } from './dto/created-video-stream-tag.dto';
import { UpdatedVideoStreamTagDto } from './dto/updated-video-stream-tag.dto';
@Controller('video-stream-tag')
export class VideoStreamTagController {
  constructor(private readonly videoStreamTagService: VideoStreamTagService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<VideoStreamTag[]> {
    return await this.videoStreamTagService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaVideoStreamTagDto: CreateVideoStreamTagDto,
  ): Promise<VideoStreamTag> {
    return await this.videoStreamTagService.create(createaVideoStreamTagDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VideoStreamTag> {
    return await this.videoStreamTagService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedVideoStreamTagDto: UpdatedVideoStreamTagDto,
    @Param('id') id: string,
  ): Promise<VideoStreamTag> {
    return await this.videoStreamTagService.updated(
      +id,
      updatedVideoStreamTagDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.videoStreamTagService.deleted(+id);
  }
}
