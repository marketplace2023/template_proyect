import { NotFoundException } from '@nestjs/common';

export class PosPaymentMethodNotFoundException extends NotFoundException {
  constructor() {
    super('Pos Payment Method no encontrado');
  }
}
