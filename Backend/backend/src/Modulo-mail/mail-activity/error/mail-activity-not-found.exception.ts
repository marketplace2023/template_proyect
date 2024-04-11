import { NotFoundException } from '@nestjs/common';

export class MailActivityNotFoundException extends NotFoundException {
  constructor() {
    super('mail activity no encontrado');
  }
}
