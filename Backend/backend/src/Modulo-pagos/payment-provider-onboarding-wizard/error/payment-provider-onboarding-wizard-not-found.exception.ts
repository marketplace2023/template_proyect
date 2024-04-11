import { NotFoundException } from '@nestjs/common';

export class PaymentProviderOnboardingWizardNotFoundException extends NotFoundException {
  constructor() {
    super('Payment no encontrado');
  }
}
