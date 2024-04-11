import { NotFoundException } from '@nestjs/common';

export class StockStorageCategoryCapacityNotFoundException extends NotFoundException {
  constructor() {
    super('stock storage category capacity no encontrado');
  }
}
