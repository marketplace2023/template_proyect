import { NotFoundException } from '@nestjs/common';

export class ProductProductTemplateNotFoundException extends NotFoundException {
  constructor() {
    super('ProductProductTemplate no encontrado');
  }
}
