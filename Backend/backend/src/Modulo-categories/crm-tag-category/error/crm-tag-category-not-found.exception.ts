import { NotFoundException } from '@nestjs/common';

export class CrmTagCategoryNotFoundException extends NotFoundException {
  constructor() {
    super('Crm Tag Category no encontrado');
  }
}
