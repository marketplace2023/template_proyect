import { NotFoundException } from '@nestjs/common';

export class MailComposeMessageNotFoundException extends NotFoundException {
  constructor() {
    super('mail compose message Rtc Session no encontrado');
  }
}
