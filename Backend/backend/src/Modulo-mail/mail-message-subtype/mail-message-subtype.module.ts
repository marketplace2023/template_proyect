import { Module } from '@nestjs/common';
import { MailMessageSubtypeController } from './mail-message-subtype.controller';
import { MailMessageSubtypeService } from './mail-message-subtype.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailMessageSubtype } from './entities/mail-message-subtype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailMessageSubtype])],
  controllers: [MailMessageSubtypeController],
  providers: [MailMessageSubtypeService],
})
export class MailMessageSubtypeModule {}
