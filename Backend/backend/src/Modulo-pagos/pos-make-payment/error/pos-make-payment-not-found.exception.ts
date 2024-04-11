import { NotFoundException } from '@nestjs/common';

export class PosMakePaymentNotFoundException extends NotFoundException {
  constructor() {
    super('Pos Make Payment no encontrado');
  }
}
