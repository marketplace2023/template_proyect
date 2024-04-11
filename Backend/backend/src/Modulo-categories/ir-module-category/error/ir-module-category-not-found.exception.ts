import { NotFoundException } from '@nestjs/common';

export class IrModuleCategoryNotFoundException extends NotFoundException {
  constructor() {
    super('Ir Module Category no encontrado');
  }
}
