import { NotFoundException } from '@nestjs/common';

export class ResGroupsImpliedIdsNotFoundException extends NotFoundException {
  constructor() {
    super('Users groups Implied Ids no encontrado');
  }
}
