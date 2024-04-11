import { NotFoundException } from '@nestjs/common';

export class AttributeValueCategoryNotFoundException extends NotFoundException {
  constructor() {
    super('Attribute Value Category no encontrado');
  }
}
