import { NotFoundException } from '@nestjs/common';

export class MailTrackingValueNotFoundException extends NotFoundException {
  constructor() {
    super('Mail Tracking Value nvite no encontrado');
  }
}
