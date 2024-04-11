import { NotFoundException } from '@nestjs/common';

export class MailIceServerNotFoundException extends NotFoundException {
  constructor() {
    super('mail ice server no encontrado');
  }
}
