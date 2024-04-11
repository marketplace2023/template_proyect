import { NotFoundException } from '@nestjs/common';

export class MailTemplateNotFoundException extends NotFoundException {
  constructor() {
    super('Mail Template no encontrado');
  }
}
