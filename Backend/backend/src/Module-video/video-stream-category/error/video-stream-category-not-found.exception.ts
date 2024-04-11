import { NotFoundException } from '@nestjs/common';

export class VideoStreamCategoryNotFoundException extends NotFoundException {
  constructor() {
    super('Video Stream category no encontrado');
  }
}
