import { Module } from '@nestjs/common';
import { MailNotificationController } from './mail-notification.controller';
import { MailNotificationService } from './mail-notification.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailNotification } from './entities/mail-notification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailNotification])],
  controllers: [MailNotificationController],
  providers: [MailNotificationService],
})
export class MailNotificationModule {}
