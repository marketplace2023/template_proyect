import { Module } from '@nestjs/common';
import { MailChannelController } from './mail-channel.controller';
import { MailChannelService } from './mail-channel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailChannel } from './entities/mail-channel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailChannel])],
  controllers: [MailChannelController],
  providers: [MailChannelService],
})
export class MailChannelModule {}
