import { NotFoundException } from '@nestjs/common';

export class StockShipmentvolumeNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Shipment volume no encontrado');
  }
}
