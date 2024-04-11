import { NotFoundException } from '@nestjs/common';

export class MailChannelNotFoundException extends NotFoundException {
  constructor() {
    super('mail channel no encontrado');
  }
}
