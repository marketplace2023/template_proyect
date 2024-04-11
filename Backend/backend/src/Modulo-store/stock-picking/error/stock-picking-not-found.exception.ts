import { NotFoundException } from '@nestjs/common';

export class StockPickingNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Picking no encontrado');
  }
}
