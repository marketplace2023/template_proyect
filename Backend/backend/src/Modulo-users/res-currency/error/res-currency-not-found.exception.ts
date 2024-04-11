import { NotFoundException } from '@nestjs/common';

export class ResCurrencyNotFoundException extends NotFoundException {
  constructor() {
    super('Users Currency no encontrado');
  }
}
