import { NotFoundException } from '@nestjs/common';

export class ReportLayoutNotFoundException extends NotFoundException {
  constructor() {
    super('ReportLayout no encontrado');
  }
}
