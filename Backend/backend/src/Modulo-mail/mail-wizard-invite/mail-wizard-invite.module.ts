import { Module } from '@nestjs/common';
import { MailWizardInviteController } from './mail-wizard-invite.controller';
import { MailWizardInviteService } from './mail-wizard-invite.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailWizardInvite } from './entities/mail-wizard-invite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailWizardInvite])],
  controllers: [MailWizardInviteController],
  providers: [MailWizardInviteService],
})
export class MailWizardInviteModule {}
