import { NotFoundException } from '@nestjs/common';

export class MailAliasNotFoundException extends NotFoundException {
  constructor() {
    super('mail alias no encontrado');
  }
}
