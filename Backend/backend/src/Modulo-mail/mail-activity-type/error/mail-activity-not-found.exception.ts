import { NotFoundException } from '@nestjs/common';

export class MailActivityTypeNotFoundException extends NotFoundException {
  constructor() {
    super('mail activity type no encontrado');
  }
}
