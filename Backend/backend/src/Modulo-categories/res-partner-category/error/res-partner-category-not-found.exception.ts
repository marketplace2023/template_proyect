import { NotFoundException } from '@nestjs/common';

export class ResPartnerCategoryNotFoundException extends NotFoundException {
  constructor() {
    super('Res Partner Category no encontrado');
  }
}
