import { Module } from '@nestjs/common';
import { MailTrackingValueController } from './mail-tracking-value.controller';
import { MailTrackingValueService } from './mail-tracking-value.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailTrackingValue } from './entities/mail-tracking-value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailTrackingValue])],
  controllers: [MailTrackingValueController],
  providers: [MailTrackingValueService],
})
export class MailTrackingValueModule {}
