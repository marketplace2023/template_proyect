import { NotFoundException } from '@nestjs/common';

export class AccountReportExpressionNotFoundException extends NotFoundException {
  constructor() {
    super('Account Report exp´ression no encontrado');
  }
}
