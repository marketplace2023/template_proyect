import { Module } from '@nestjs/common';
import { DeliveryPackageController } from './delivery-package.controller';
import { DeliveryPackageService } from './delivery-package.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryPackage } from './entities/delivery-package.entity';
import { ChooseDeliveryCarrier } from 'src/Modulo-Envio/choose-delivery-carrier/entities/choose-delivery-carrier.entity';
import { ChooseDeliveryPackage } from 'src/Modulo-Envio/choose-delivery-package/entities/choose-delivery-package.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DeliveryPackage,
      ChooseDeliveryCarrier,
      ChooseDeliveryPackage,
    ]),
  ],
  controllers: [DeliveryPackageController],
  providers: [DeliveryPackageService],
})
export class DeliveryPackageModule {}
