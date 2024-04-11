import { NotFoundException } from '@nestjs/common';

export class StockPickingPackageNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Picking Package no encontrado');
  }
}
