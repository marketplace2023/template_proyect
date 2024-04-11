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
import { MailNotification } from './entities/mail-notification.entity';
import { MailNotificationService } from './mail-notification.service';
import { CreateMailNotificationDto } from './dto/create-mail-notification.dto';
import { UpdatedMailNotificationDto } from './dto/updated-mail-notification.dto';
@Controller('mail-notification')
export class MailNotificationController {
  constructor(
    private readonly MailNotificationService: MailNotificationService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailNotification[]> {
    return await this.MailNotificationService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailNotificationDto: CreateMailNotificationDto,
  ): Promise<MailNotification> {
    return await this.MailNotificationService.create(
      createaMailNotificationDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailNotification> {
    return await this.MailNotificationService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailNotificationDto: UpdatedMailNotificationDto,
    @Param('id') id: string,
  ): Promise<MailNotification> {
    return await this.MailNotificationService.updated(
      +id,
      updatedMailNotificationDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.MailNotificationService.deleted(+id);
  }
}
