import { NotFoundException } from '@nestjs/common';

export class MailNotificationNotFoundException extends NotFoundException {
  constructor() {
    super('mail notification no encontrado');
  }
}
