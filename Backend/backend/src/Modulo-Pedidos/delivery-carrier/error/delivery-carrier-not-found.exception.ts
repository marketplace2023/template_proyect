import { NotFoundException } from '@nestjs/common';

export class DeliveryCarrierNotFoundException extends NotFoundException {
  constructor() {
    super('delivery carrier no encontrado');
  }
}
