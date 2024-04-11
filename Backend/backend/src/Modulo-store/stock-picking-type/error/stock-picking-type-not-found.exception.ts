import { NotFoundException } from '@nestjs/common';

export class StockPickingTypeNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Picking Type no encontrado');
  }
}
