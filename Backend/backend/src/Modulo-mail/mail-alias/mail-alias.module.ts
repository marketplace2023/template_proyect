import { Module } from '@nestjs/common';
import { MailAliasController } from './mail-alias.controller';
import { MailAliasService } from './mail-alias.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailAlias } from './entities/mail-alias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailAlias])],
  controllers: [MailAliasController],
  providers: [MailAliasService],
})
export class MailAliasModule {}
