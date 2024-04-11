import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailBlacklistRemove } from './entities/mail-blacklist-remove-not-found.exception';
import { MailBlacklistRemoveRemoveController } from './mail-blacklist-remove.controller';
import { MailBlacklistRemoveRemoveService } from './mail-blacklist-remove.service';

@Module({
  imports: [TypeOrmModule.forFeature([MailBlacklistRemove])],
  controllers: [MailBlacklistRemoveRemoveController],
  providers: [MailBlacklistRemoveRemoveService],
})
export class MailBlacklistRemoveModule {}
