import { NotFoundException } from '@nestjs/common';

export class SalePaymentProviderOnboardingWizardNotFoundException extends NotFoundException {
  constructor() {
    super('Sale Advance Payment Inv no encontrado');
  }
}
