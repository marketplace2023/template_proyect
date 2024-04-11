import { Module } from '@nestjs/common';
import { MailIceServerController } from './mail-ice-server.controller';
import { MailIceServerService } from './mail-ice-server.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailIceServer } from './entities/mail-ice-server.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailIceServer])],
  controllers: [MailIceServerController],
  providers: [MailIceServerService],
})
export class MailIceServerModule {}
