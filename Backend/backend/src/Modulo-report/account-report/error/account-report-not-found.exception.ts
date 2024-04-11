import { NotFoundException } from '@nestjs/common';

export class AccountReportNotFoundException extends NotFoundException {
  constructor() {
    super('Account Report no encontrado');
  }
}
