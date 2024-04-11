import { NotFoundException } from '@nestjs/common';

export class MailWizardInviteNotFoundException extends NotFoundException {
  constructor() {
    super('Mail Wizard nvite no encontrado');
  }
}
