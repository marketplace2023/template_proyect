import { NotFoundException } from '@nestjs/common';

export class MailGuestNotFoundException extends NotFoundException {
  constructor() {
    super('mail guest no encontrado');
  }
}
