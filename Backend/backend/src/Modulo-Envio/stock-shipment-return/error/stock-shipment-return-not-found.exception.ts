import { NotFoundException } from '@nestjs/common';

export class StockShipmentReturnNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Shipment volume no encontrado');
  }
}
