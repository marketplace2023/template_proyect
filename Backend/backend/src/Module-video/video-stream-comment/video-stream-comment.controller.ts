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
import { VideoStreamCommentService } from './video-stream-comment.service';
import { VideoStreamComment } from './entities/video-stream-comment.entity';
import { CreateVideoStreamCommentDto } from './dto/created-video-stream-comment.dto';
import { UpdatedVideoStreamCommentDto } from './dto/updated-video-stream-comment.dto';

@Controller('video-stream-comment')
export class VideoStreamCommentController {
  constructor(
    private readonly videoStreamCommentService: VideoStreamCommentService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<VideoStreamComment[]> {
    return await this.videoStreamCommentService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createVideoStreamCommentDto: CreateVideoStreamCommentDto,
  ): Promise<VideoStreamComment> {
    return await this.videoStreamCommentService.create(
      createVideoStreamCommentDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VideoStreamComment> {
    return await this.videoStreamCommentService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedVideoStreamCommentDto: UpdatedVideoStreamCommentDto,
    @Param('id') id: string,
  ): Promise<VideoStreamComment> {
    return await this.videoStreamCommentService.updated(
      +id,
      updatedVideoStreamCommentDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.videoStreamCommentService.deleted(+id);
  }
}
