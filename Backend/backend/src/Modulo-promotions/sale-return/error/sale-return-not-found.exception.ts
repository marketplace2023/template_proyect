import { NotFoundException } from '@nestjs/common';

export class SaleReturnNotFoundException extends NotFoundException {
  constructor() {
    super('sale Return no encontrado');
  }
}
