import { NotFoundException } from '@nestjs/common';

export class AccountBankStatementNotFoundException extends NotFoundException {
  constructor() {
    super('Account Bank Statement no encontrado');
  }
}
