import { NotFoundException } from '@nestjs/common';

export class SaleReportNotFoundException extends NotFoundException {
  constructor() {
    super('sale Report no encontrado');
  }
}
