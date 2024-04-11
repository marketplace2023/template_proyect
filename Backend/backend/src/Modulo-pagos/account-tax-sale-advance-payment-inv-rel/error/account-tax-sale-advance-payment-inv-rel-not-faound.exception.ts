import { NotFoundException } from '@nestjs/common';

export class AccountTaxSaleAdvancePaymentInvRelNotFoundException extends NotFoundException {
  constructor() {
    super('AccountTaxSaleAdvancePaymentInvRel no encontrado');
  }
}
