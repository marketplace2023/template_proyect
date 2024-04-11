import { NotFoundException } from '@nestjs/common';

export class PaymentRefundWizardNotFoundException extends NotFoundException {
  constructor() {
    super('Payment no encontrado');
  }
}
