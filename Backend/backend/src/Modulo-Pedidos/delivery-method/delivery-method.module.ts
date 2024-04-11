import { Module } from '@nestjs/common';
import { DeliveryMethodController } from './delivery-method.controller';
import { DeliveryMethodService } from './delivery-method.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryMethod } from './entities/delivery-method.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryMethod])],
  controllers: [DeliveryMethodController],
  providers: [DeliveryMethodService],
})
export class DeliveryMethodModule {}
