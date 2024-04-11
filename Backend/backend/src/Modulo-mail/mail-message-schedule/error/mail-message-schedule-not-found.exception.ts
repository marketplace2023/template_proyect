import { NotFoundException } from '@nestjs/common';

export class MailMessageScheduleNotFoundException extends NotFoundException {
  constructor() {
    super('mail mesage schedule no encontrado');
  }
}
