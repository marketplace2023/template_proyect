import { NotFoundException } from '@nestjs/common';

export class AccountReportColumnNotFoundException extends NotFoundException {
  constructor() {
    super('Account Report Column no encontrado');
  }
}
