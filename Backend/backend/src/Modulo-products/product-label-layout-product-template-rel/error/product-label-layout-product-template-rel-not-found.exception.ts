import { NotFoundException } from '@nestjs/common';

export class ProductLabelLayoutProductTemplateRelNotFoundException extends NotFoundException {
  constructor() {
    super('Product Label Layout Product TemplateRel no encontrado');
  }
}
