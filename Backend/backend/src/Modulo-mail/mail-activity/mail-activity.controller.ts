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
import { MailActivity } from './entities/mail-activity.entity';
import { MailActivityService } from './mail-activity.service';
import { CreateMailActivityDto } from './dto/create-mail-activity.dto';
import { UpdatedMailActivityDto } from './dto/updated-mail-activity.dto';
@Controller('mail-activity')
export class MailActivityController {
  constructor(private readonly mailActivityService: MailActivityService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailActivity[]> {
    return await this.mailActivityService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailActivityDto: CreateMailActivityDto,
  ): Promise<MailActivity> {
    return await this.mailActivityService.create(createaMailActivityDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailActivity> {
    return await this.mailActivityService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailActivityDto: UpdatedMailActivityDto,
    @Param('id') id: string,
  ): Promise<MailActivity> {
    return await this.mailActivityService.updated(+id, updatedMailActivityDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.mailActivityService.deleted(+id);
  }
}
