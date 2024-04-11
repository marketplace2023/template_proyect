import { Module } from '@nestjs/common';
import { MailMessageScheduleController } from './mail-message-schedule.controller';
import { MailMessageScheduleService } from './mail-message-schedule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailMessageSchedule } from './entities/mail-message-schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailMessageSchedule])],
  controllers: [MailMessageScheduleController],
  providers: [MailMessageScheduleService],
})
export class MailMessageScheduleModule {}
