import { NotFoundException } from '@nestjs/common';

export class AccountAccountdNotFoundException extends NotFoundException {
  constructor() {
    super('Account Account no encontrado');
  }
}
