import { NotFoundException } from '@nestjs/common';

export class MailBlacklistRemoveNotFoundException extends NotFoundException {
  constructor() {
    super('mail blacklist remove no encontrado');
  }
}
