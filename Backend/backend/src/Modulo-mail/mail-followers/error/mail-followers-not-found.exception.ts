import { NotFoundException } from '@nestjs/common';

export class MailFollowersNotFoundException extends NotFoundException {
  constructor() {
    super('mail followers no encontrado');
  }
}
