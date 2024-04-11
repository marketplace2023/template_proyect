import { NotFoundException } from '@nestjs/common';

export class PosConfigPosPaymentMethodRelNotFoundException extends NotFoundException {
  constructor() {
    super('Pos Config Pos Payment Method Rel no encontrado');
  }
}
