import { NotFoundException } from '@nestjs/common';

export class AccountTaxNotFoundException extends NotFoundException {
  constructor() {
    super('Account Tax no encontrado');
  }
}
