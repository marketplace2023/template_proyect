import { NotFoundException } from '@nestjs/common';

export class PaymentLinkWizardNotFoundException extends NotFoundException {
  constructor() {
    super('Payment no encontrado');
  }
}
