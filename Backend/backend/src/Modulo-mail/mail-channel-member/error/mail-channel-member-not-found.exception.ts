import { NotFoundException } from '@nestjs/common';

export class MailChannelMemberNotFoundException extends NotFoundException {
  constructor() {
    super('mail channel member no encontrado');
  }
}
