import { NotFoundException } from '@nestjs/common';

export class StockPickingLineNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Picking Line no encontrado');
  }
}
