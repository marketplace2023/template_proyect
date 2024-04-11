import { NotFoundException } from '@nestjs/common';

export class StockShipmentTrackingNotFoundException extends NotFoundException {
  constructor() {
    super('Stock Shipment tracking no encontrado');
  }
}
