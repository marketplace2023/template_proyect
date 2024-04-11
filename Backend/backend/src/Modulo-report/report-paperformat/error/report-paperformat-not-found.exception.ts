import { NotFoundException } from '@nestjs/common';

export class ReportPaperformatNotFoundException extends NotFoundException {
  constructor() {
    super('ReportPaperformat no encontrado');
  }
}
