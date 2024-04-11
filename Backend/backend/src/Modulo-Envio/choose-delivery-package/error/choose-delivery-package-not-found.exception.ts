import { NotFoundException } from '@nestjs/common';

export class ChooseDeliveryPackageNotFoundException extends NotFoundException {
  constructor() {
    super('Choose delivery package no encontrado');
  }
}
