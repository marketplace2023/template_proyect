import { NotFoundException } from '@nestjs/common';

export class StockLocationNotFoundException extends NotFoundException {
  constructor() {
    super('StockLocation no encontrado');
  }
}
