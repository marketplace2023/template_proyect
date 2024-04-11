import { NotFoundException } from '@nestjs/common';

export class StockWarehouseNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Warehouset no encontrado');
  }
}
