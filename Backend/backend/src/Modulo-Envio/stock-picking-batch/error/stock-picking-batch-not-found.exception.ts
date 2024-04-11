import { NotFoundException } from '@nestjs/common';

export class StockPickingBatchNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Picking Batch no encontrado');
  }
}
