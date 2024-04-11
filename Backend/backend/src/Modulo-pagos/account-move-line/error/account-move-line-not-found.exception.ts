import { NotFoundException } from '@nestjs/common';

export class AccountMoveLineNotFoundException extends NotFoundException {
  constructor() {
    super('Account Move Line no encontrado');
  }
}
