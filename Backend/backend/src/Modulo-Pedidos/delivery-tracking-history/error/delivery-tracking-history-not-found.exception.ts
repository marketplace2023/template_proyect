import { NotFoundException } from '@nestjs/common';

export class DeliveryTrackingHistoryNotFoundException extends NotFoundException {
  constructor() {
    super('Delivery Tracking History no encontrado');
  }
}
