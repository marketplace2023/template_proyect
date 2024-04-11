import { NotFoundException } from '@nestjs/common';

export class MailTemplatePreviewNotFoundException extends NotFoundException {
  constructor() {
    super('Mail Template Preview nvite no encontrado');
  }
}
