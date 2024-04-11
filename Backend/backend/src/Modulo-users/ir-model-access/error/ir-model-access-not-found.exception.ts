import { NotFoundException } from '@nestjs/common';

export class IrModelAccessNotFoundException extends NotFoundException {
  constructor() {
    super('Ir Model Access no encontrado');
  }
}
