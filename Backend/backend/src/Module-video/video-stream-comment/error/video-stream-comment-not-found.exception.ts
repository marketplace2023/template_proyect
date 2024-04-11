import { NotFoundException } from '@nestjs/common';

export class VideoStreamCommentNotFoundException extends NotFoundException {
  constructor() {
    super('Video Stream Comment no encontrado');
  }
}
