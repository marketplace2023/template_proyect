import { NotFoundException } from '@nestjs/common';

export class StockPickingStatusNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Picking Status no encontrado');
  }
}
