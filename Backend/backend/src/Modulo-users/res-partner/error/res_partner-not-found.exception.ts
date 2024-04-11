import { NotFoundException } from '@nestjs/common';

export class ResPartnerNotFoundException extends NotFoundException {
  constructor() {
    super('cliente o proveedor no encontrado');
  }
}
