import { NotFoundException } from '@nestjs/common';

export class MailResendPartnerNotFoundException extends NotFoundException {
  constructor() {
    super('Mail Resend Partner no encontrado');
  }
}
