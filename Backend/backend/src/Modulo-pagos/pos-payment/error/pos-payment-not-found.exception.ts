import { NotFoundException } from '@nestjs/common';

export class PosPaymentNotFoundException extends NotFoundException {
  constructor() {
    super('Pos Payment no encontrado');
  }
}
