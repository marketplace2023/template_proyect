import { NotFoundException } from '@nestjs/common';

export class StockCarrierNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Carrier no encontrado');
  }
}
