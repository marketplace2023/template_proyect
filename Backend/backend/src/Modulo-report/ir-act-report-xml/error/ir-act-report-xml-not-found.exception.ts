import { NotFoundException } from '@nestjs/common';

export class IrActReportXmlNotFoundException extends NotFoundException {
  constructor() {
    super('Ir Act Report Xml no encontrado');
  }
}
