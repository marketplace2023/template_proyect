import { NotFoundException } from '@nestjs/common';

export class AccountReportExternalValueNotFoundException extends NotFoundException {
  constructor() {
    super('Account Report External Value no encontrado');
  }
}
