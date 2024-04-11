import { NotFoundException } from '@nestjs/common';

export class AccountReportLineNotFoundException extends NotFoundException {
  constructor() {
    super('Account Report Line no encontrado');
  }
}
