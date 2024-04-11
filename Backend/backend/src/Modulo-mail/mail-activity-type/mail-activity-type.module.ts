import { Module } from '@nestjs/common';
import { MailActivityTypeController } from './mail-activity-type.controller';
import { MailActivityTypeService } from './mail-activity-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailActivityType } from './entities/mail-activity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailActivityType])],
  controllers: [MailActivityTypeController],
  providers: [MailActivityTypeService],
})
export class MailActivityTypeModule {}
