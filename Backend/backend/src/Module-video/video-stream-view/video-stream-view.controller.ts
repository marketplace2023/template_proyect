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
import { VideoStreamViewService } from './video-stream-view.service';
import { VideoStreamView } from './entities/video-stream-view.entity';
import { CreateVideoStreamViewDto } from './dto/created-video-stream-view.dto';
import { UpdatedVideoStreamViewDto } from './dto/updated-video-stream-view.dto';
@Controller('video-stream-view')
export class VideoStreamViewController {
  constructor(
    private readonly videoStreamViewService: VideoStreamViewService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<VideoStreamView[]> {
    return await this.videoStreamViewService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaVideoStreamViewDto: CreateVideoStreamViewDto,
  ): Promise<VideoStreamView> {
    return await this.videoStreamViewService.create(createaVideoStreamViewDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VideoStreamView> {
    return await this.videoStreamViewService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedVideoStreamViewDto: UpdatedVideoStreamViewDto,
    @Param('id') id: string,
  ): Promise<VideoStreamView> {
    return await this.videoStreamViewService.updated(
      +id,
      updatedVideoStreamViewDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.videoStreamViewService.deleted(+id);
  }
}
