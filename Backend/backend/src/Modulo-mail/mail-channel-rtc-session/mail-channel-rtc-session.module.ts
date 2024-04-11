import { Module } from '@nestjs/common';
import { MailChannelRtcSessionController } from './mail-channel-rtc-session.controller';
import { MailChannelRtcSessionService } from './mail-channel-rtc-session.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailChannelRtcSession } from './entities/mail-channel-rtc-session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailChannelRtcSession])],
  controllers: [MailChannelRtcSessionController],
  providers: [MailChannelRtcSessionService],
})
export class MailChannelRtcSessionModule {}
