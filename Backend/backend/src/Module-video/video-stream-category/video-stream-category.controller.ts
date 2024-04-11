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
import { UpdatedVideoStreamCategoryDto } from './dto/updated-video-stream-category.dto';
import { VideoStreamCategory } from './entities/video-stream-category.entity';
import { VideoStreamCategoryService } from './video-stream-category.service';
import { CreateVideoStreamCategoryDto } from './dto/created-video-stream-category.dto';

@Controller('video-stream-category')
export class VideoStreamCategoryController {
  constructor(
    private readonly videoStreamCategoryService: VideoStreamCategoryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<VideoStreamCategory[]> {
    return await this.videoStreamCategoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createVideoStreamCategoryDto: CreateVideoStreamCategoryDto,
  ): Promise<VideoStreamCategory> {
    return await this.videoStreamCategoryService.create(
      createVideoStreamCategoryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VideoStreamCategory> {
    return await this.videoStreamCategoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedVideoStreamCategoryDto: UpdatedVideoStreamCategoryDto,
    @Param('id') id: string,
  ): Promise<VideoStreamCategory> {
    return await this.videoStreamCategoryService.updated(
      +id,
      updatedVideoStreamCategoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.videoStreamCategoryService.deleted(+id);
  }
}
