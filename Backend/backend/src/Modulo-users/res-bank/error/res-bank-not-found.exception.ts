import { NotFoundException } from '@nestjs/common';

export class ResBankNotFoundException extends NotFoundException {
  constructor() {
    super('Res bank no encontrado');
  }
}
