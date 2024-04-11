import { Module } from '@nestjs/common';
import { MailChannelMemberController } from './mail-channel-member.controller';
import { MailChannelMemberService } from './mail-channel-member.service';
import { MailChannelMember } from './entities/mail-channel-member-not-found.exception';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MailChannelMember])],
  controllers: [MailChannelMemberController],
  providers: [MailChannelMemberService],
})
export class MailChannelMemberModule {}
