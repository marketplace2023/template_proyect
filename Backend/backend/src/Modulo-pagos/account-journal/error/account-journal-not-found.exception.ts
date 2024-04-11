import { NotFoundException } from '@nestjs/common';

export class AccountJournalNotFoundException extends NotFoundException {
  constructor() {
    super('Acccount Journal no encontrado');
  }
}
