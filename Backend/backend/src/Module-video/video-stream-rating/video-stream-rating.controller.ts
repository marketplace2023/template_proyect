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
import { VideoStreamRatingService } from './video-stream-rating.service';
import { VideoStreamRating } from './entities/video-stream-riting.entity';
import { CreateVideoStreamRatingDto } from './dto/created-video-stream-rating.dto';
import { UpdatedVideoStreamRatingDto } from './dto/updated-video-stream-rating.dto';
@Controller('video-stream-rating')
export class VideoStreamRatingController {
  constructor(
    private readonly videoStreamRatingService: VideoStreamRatingService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<VideoStreamRating[]> {
    return await this.videoStreamRatingService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaVideoStreamRatingDto: CreateVideoStreamRatingDto,
  ): Promise<VideoStreamRating> {
    return await this.videoStreamRatingService.create(
      createaVideoStreamRatingDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VideoStreamRating> {
    return await this.videoStreamRatingService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedVideoStreamRatingDto: UpdatedVideoStreamRatingDto,
    @Param('id') id: string,
  ): Promise<VideoStreamRating> {
    return await this.videoStreamRatingService.updated(
      +id,
      updatedVideoStreamRatingDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.videoStreamRatingService.deleted(+id);
  }
}
