import { NotFoundException } from '@nestjs/common';

export class MailMessageNotFoundException extends NotFoundException {
  constructor() {
    super('mail message no encontrado');
  }
}
