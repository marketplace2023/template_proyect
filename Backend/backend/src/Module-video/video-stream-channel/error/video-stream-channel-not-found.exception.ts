import { NotFoundException } from '@nestjs/common';

export class VideoStreamChannelNotFoundException extends NotFoundException {
  constructor() {
    super('Video Stream channel no encontrado');
  }
}
