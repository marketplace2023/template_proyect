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
import { VideoStreamSubscriptionService } from './video-stream-subscription.service';
import { VideoStreamSubscription } from './entities/video-stream-subscription.entity';
import { CreateVideoStreamSubscriptionDto } from './dto/created-video-stream-subscription.dto';
import { UpdatedVideoStreamSubscriptionDto } from './dto/updated-video-stream-subscription.dto';
@Controller('video-stream-subscription')
export class VideoStreamSubscriptionController {
  constructor(
    private readonly videoStreamSubscriptionService: VideoStreamSubscriptionService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<VideoStreamSubscription[]> {
    return await this.videoStreamSubscriptionService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaVideoStreamSubscriptionDto: CreateVideoStreamSubscriptionDto,
  ): Promise<VideoStreamSubscription> {
    return await this.videoStreamSubscriptionService.create(
      createaVideoStreamSubscriptionDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VideoStreamSubscription> {
    return await this.videoStreamSubscriptionService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedVideoStreamSubscriptionDto: UpdatedVideoStreamSubscriptionDto,
    @Param('id') id: string,
  ): Promise<VideoStreamSubscription> {
    return await this.videoStreamSubscriptionService.updated(
      +id,
      updatedVideoStreamSubscriptionDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.videoStreamSubscriptionService.deleted(+id);
  }
}
