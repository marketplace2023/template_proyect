import { NotFoundException } from '@nestjs/common';

export class DeliveryShipmentNotFoundException extends NotFoundException {
  constructor() {
    super('delivery Shipment no encontrado');
  }
}
