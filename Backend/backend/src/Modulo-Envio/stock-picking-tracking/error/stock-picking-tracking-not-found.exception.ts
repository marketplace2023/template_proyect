import { NotFoundException } from '@nestjs/common';

export class StockPickingTrackingNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Picking Tracking no encontrado');
  }
}
