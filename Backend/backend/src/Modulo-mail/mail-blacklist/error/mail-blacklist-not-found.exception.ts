import { NotFoundException } from '@nestjs/common';

export class MailBlacklistNotFoundException extends NotFoundException {
  constructor() {
    super('mail blacklist no encontrado');
  }
}
