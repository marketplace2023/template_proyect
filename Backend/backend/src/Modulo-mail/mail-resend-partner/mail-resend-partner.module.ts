import { Module } from '@nestjs/common';
import { MailResendPartnerController } from './mail-resend-partner.controller';
import { MailResendPartnerService } from './mail-resend-partner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailResendPartner } from './entities/mail-resend-partner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailResendPartner])],
  controllers: [MailResendPartnerController],
  providers: [MailResendPartnerService],
})
export class MailResendPartnerModule {}
