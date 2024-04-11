import { NotFoundException } from '@nestjs/common';

export class ResCountryStateNotFoundException extends NotFoundException {
  constructor() {
    super('Users country state no encontrado');
  }
}
