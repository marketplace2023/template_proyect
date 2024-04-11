import { NotFoundException } from '@nestjs/common';

export class MailLinkPreviewNotFoundException extends NotFoundException {
  constructor() {
    super('mail Link Preview no encontrado');
  }
}
