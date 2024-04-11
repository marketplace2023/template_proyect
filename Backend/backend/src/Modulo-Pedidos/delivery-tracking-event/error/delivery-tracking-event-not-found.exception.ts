import { NotFoundException } from '@nestjs/common';

export class DeliveryTrackingEventNotFoundException extends NotFoundException {
  constructor() {
    super('DeliveryTrackingEvent no encontrado');
  }
}
