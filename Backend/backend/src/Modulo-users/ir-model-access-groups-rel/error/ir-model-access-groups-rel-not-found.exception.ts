import { NotFoundException } from '@nestjs/common';

export class IrModelAccessGroupsRelNotFoundException extends NotFoundException {
  constructor() {
    super('Ir Model Access Groups Rel no encontrado');
  }
}
