import { NotFoundException } from '@nestjs/common';

export class StockPickingNoteNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Picking Note no encontrado');
  }
}
