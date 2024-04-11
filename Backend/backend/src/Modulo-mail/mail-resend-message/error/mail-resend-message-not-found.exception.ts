import { NotFoundException } from '@nestjs/common';

export class MailResendMessageNotFoundException extends NotFoundException {
  constructor() {
    super('Mail Resend Message no encontrado');
  }
}
