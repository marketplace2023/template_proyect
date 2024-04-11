import { NotFoundException } from '@nestjs/common';

export class HrEmployeeCategoryNotFoundException extends NotFoundException {
  constructor() {
    super('category hr-employee no encontrado');
  }
}
