import { NotFoundException } from '@nestjs/common';

export class VideoStreamViewNotFoundException extends NotFoundException {
  constructor() {
    super('Video Stream view no encontrado');
  }
}
