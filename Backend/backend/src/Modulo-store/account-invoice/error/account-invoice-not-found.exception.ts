import { NotFoundException } from '@nestjs/common';

export class AccountInvoiceNotFoundException extends NotFoundException {
  constructor() {
    super('Account Invone no encontrado');
  }
}
