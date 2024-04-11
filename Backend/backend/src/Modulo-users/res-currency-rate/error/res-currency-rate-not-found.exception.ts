import { NotFoundException } from '@nestjs/common';

export class ResCurrencyRateNotFoundException extends NotFoundException {
  constructor() {
    super('Res Currency Rate no encontrado');
  }
}
