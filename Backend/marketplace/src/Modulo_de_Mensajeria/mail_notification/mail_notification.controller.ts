import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailNotificationService } from './mail_notification.service';
import { CreateMailNotificationDto } from './dto/create-mail_notification.dto';
import { UpdateMailNotificationDto } from './dto/update-mail_notification.dto';

@Controller('mail-notification')
export class MailNotificationController {
  constructor(
    private readonly mailNotificationService: MailNotificationService,
  ) {}

  @Post()
  create(@Body() createMailNotificationDto: CreateMailNotificationDto) {
    return this.mailNotificationService.create(createMailNotificationDto);
  }

  @Get()
  findAll() {
    return this.mailNotificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailNotificationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailNotificationDto: UpdateMailNotificationDto,
  ) {
    return this.mailNotificationService.update(+id, updateMailNotificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailNotificationService.remove(+id);
  }
}
//envio-notificaciones                                                                # (mail.notification)
//# Maneja el proceso de notificar a usuarios sobre actualizaciones importantes.
