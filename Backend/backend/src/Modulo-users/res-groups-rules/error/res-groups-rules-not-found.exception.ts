import { NotFoundException } from '@nestjs/common';

export class ResGroupsRulesNotFoundException extends NotFoundException {
  constructor() {
    super('Users groups Rules no encontrado');
  }
}
