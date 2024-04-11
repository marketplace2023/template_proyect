import { NotFoundException } from '@nestjs/common';

export class StockStorageCategoryNotFoundException extends NotFoundException {
  constructor() {
    super('stock Storage Category no encontrado');
  }
}
