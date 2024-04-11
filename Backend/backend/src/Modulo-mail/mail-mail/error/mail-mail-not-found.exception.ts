import { NotFoundException } from '@nestjs/common';

export class MailMailNotFoundException extends NotFoundException {
  constructor() {
    super('mail mail no encontrado');
  }
}
