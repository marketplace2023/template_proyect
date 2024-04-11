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
import { MailMessageScheduleService } from './mail-message-schedule.service';
import { MailMessageSchedule } from './entities/mail-message-schedule.entity';
import { CreateMailMessageScheduleDto } from './dto/create-mail-message-schedule.dto';
import { UpdatedMailMessageScheduleDto } from './dto/updated-mail-message-schedule.dto';
@Controller('mail-message-schedule')
export class MailMessageScheduleController {
  constructor(
    private readonly MailMessageScheduleService: MailMessageScheduleService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailMessageSchedule[]> {
    return await this.MailMessageScheduleService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailMessageScheduleDto: CreateMailMessageScheduleDto,
  ): Promise<MailMessageSchedule> {
    return await this.MailMessageScheduleService.create(
      createaMailMessageScheduleDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailMessageSchedule> {
    return await this.MailMessageScheduleService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailMessageScheduleDto: UpdatedMailMessageScheduleDto,
    @Param('id') id: string,
  ): Promise<MailMessageSchedule> {
    return await this.MailMessageScheduleService.updated(
      +id,
      updatedMailMessageScheduleDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.MailMessageScheduleService.deleted(+id);
  }
}
