import { NotFoundException } from '@nestjs/common';

export class VideoStreamTagNotFoundException extends NotFoundException {
  constructor() {
    super('Video Stream tag no encontrado');
  }
}
