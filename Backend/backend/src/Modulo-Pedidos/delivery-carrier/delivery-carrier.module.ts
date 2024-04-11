import { Module } from '@nestjs/common';
import { DeliveryCarrierController } from './delivery-carrier.controller';
import { DeliveryCarrierService } from './delivery-carrier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryCarrier } from './entities/delivery-carrier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryCarrier])],
  controllers: [DeliveryCarrierController],
  providers: [DeliveryCarrierService],
})
export class DeliveryCarrierModule {}
