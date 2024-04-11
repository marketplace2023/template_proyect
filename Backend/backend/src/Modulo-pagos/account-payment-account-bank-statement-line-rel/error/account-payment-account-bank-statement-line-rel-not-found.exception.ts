import { NotFoundException } from '@nestjs/common';

export class AccountPaymentAccountBankStatementLineRelNotFoundException extends NotFoundException {
  constructor() {
    super('Account Payment Account Bank Statement Line Rel no encontrado');
  }
}
