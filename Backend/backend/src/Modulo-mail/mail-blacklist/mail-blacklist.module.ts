import { Module } from '@nestjs/common';
import { MailBlacklistController } from './mail-blacklist.controller';
import { MailBlacklistService } from './mail-blacklist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailBlacklist } from './entities/mail-blacklist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailBlacklist])],
  controllers: [MailBlacklistController],
  providers: [MailBlacklistService],
})
export class MailBlacklistModule {}
