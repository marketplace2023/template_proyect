import { Injectable } from '@nestjs/common';
import { CreateMailNotificationDto } from './dto/create-mail_notification.dto';
import { UpdateMailNotificationDto } from './dto/update-mail_notification.dto';

@Injectable()
export class MailNotificationService {
  create(createMailNotificationDto: CreateMailNotificationDto) {
    return 'This action adds a new mailNotification';
  }

  findAll() {
    return `This action returns all mailNotification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailNotification`;
  }

  update(id: number, updateMailNotificationDto: UpdateMailNotificationDto) {
    return `This action updates a #${id} mailNotification`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailNotification`;
  }
}
