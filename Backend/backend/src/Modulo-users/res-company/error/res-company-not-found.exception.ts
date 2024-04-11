import { NotFoundException } from '@nestjs/common';

export class ResCompanyNotFoundException extends NotFoundException {
  constructor() {
    super('Users company no encontrado');
  }
}
