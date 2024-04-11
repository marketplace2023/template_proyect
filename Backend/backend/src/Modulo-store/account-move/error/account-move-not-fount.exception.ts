import { NotFoundException } from '@nestjs/common';

export class AccountMoveNotFoundException extends NotFoundException {
  constructor() {
    super('Account Move no encontrado');
  }
}
