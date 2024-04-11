import { NotFoundException } from '@nestjs/common';

export class StockPickingPackageLineNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Picking Package Line no encontrado');
  }
}
