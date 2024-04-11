import { NotFoundException } from '@nestjs/common';

export class VideoStreamSubscriptionNotFoundException extends NotFoundException {
  constructor() {
    super('Video Stream Subscription no encontrado');
  }
}
