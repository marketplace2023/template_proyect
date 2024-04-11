import { NotFoundException } from '@nestjs/common';

export class MailMessageSubtypeNotFoundException extends NotFoundException {
  constructor() {
    super('mail message subtype no encontrado');
  }
}
