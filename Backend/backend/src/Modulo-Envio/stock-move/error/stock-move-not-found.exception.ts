import { NotFoundException } from '@nestjs/common';

export class StockMoveNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Move no encontrado');
  }
}
