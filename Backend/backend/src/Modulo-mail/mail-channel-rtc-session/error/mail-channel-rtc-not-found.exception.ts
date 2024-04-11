import { NotFoundException } from '@nestjs/common';

export class MailChannelRtcSessionNotFoundException extends NotFoundException {
  constructor() {
    super('mail channel Rtc Session no encontrado');
  }
}
