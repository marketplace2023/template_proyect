import { Module } from '@nestjs/common';
import { MailGuestController } from './mail-guest.controller';
import { MailGuestService } from './mail-guest.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailGuest } from './entities/mail-guest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailGuest])],
  controllers: [MailGuestController],
  providers: [MailGuestService],
})
export class MailGuestModule {}
