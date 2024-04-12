import { Module } from '@nestjs/common';
import { DeliveryGridService } from './delivery_grid.service';
import { DeliveryGridController } from './delivery_grid.controller';

@Module({
  controllers: [DeliveryGridController],
  providers: [DeliveryGridService],
})
export class DeliveryGridModule {}
