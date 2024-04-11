import { NotFoundException } from '@nestjs/common';

export class ResCountryNotFoundException extends NotFoundException {
  constructor() {
    super('Res Country no encontrado');
  }
}
