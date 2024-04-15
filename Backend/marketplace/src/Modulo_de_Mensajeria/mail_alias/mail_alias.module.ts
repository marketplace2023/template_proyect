import { Module } from '@nestjs/common';
import { MailAliasService } from './mail_alias.service';
import { MailAliasController } from './mail_alias.controller';

@Module({
  controllers: [MailAliasController],
  providers: [MailAliasService],
})
export class MailAliasModule {}
