import { NotFoundException } from '@nestjs/common';

export class MailGatewayAllowedNotFoundException extends NotFoundException {
  constructor() {
    super('mail Gateway Allowed no encontrado');
  }
}
