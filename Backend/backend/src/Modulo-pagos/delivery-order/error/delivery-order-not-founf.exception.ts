import { NotFoundException } from '@nestjs/common';

export class DeliveryOrderNotFoundException extends NotFoundException {
  constructor() {
    super('Delivery Order no encontrado');
  }
}
