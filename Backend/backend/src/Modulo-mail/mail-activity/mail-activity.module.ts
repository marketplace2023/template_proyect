import { Module } from '@nestjs/common';
import { MailActivityController } from './mail-activity.controller';
import { MailActivityService } from './mail-activity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailActivity } from './entities/mail-activity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailActivity])],
  controllers: [MailActivityController],
  providers: [MailActivityService],
})
export class MailActivityModule {}
