import { NotFoundException } from '@nestjs/common';

export class UomCategoryNotFoundException extends NotFoundException {
  constructor() {
    super('Uom Category no encontrado');
  }
}
