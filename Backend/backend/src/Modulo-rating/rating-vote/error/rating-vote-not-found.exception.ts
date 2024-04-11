import { NotFoundException } from '@nestjs/common';

export class RatingVoteNotFoundException extends NotFoundException {
  constructor() {
    super('Rating Vote no encontrado');
  }
}
