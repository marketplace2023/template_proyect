import { NotFoundException } from '@nestjs/common';

export class DeliveryTrackingNotFoundException extends NotFoundException {
  constructor() {
    super('delivery tracking no encontrado');
  }
}
