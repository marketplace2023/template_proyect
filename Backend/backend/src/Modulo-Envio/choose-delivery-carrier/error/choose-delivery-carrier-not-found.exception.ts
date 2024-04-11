import { NotFoundException } from '@nestjs/common';

export class ChooseDeliveryCarrierNotFoundException extends NotFoundException {
  constructor() {
    super('Choose delivery carrier no encontrado');
  }
}
