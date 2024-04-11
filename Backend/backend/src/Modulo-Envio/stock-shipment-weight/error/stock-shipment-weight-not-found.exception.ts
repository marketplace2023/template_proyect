import { NotFoundException } from '@nestjs/common';

export class StockShipmentWeightNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Shipment Weight no encontrado');
  }
}
