import { NotFoundException } from '@nestjs/common';

export class IrRuleNotFoundException extends NotFoundException {
  constructor() {
    super('Ir Rule no encontrado');
  }
}
