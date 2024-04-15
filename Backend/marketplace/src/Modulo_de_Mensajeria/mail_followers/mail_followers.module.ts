import { Module } from '@nestjs/common';
import { MailFollowersService } from './mail_followers.service';
import { MailFollowersController } from './mail_followers.controller';

@Module({
  controllers: [MailFollowersController],
  providers: [MailFollowersService],
})
export class MailFollowersModule {}
