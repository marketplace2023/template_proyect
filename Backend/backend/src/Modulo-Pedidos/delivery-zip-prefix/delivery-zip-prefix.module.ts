import { Module } from '@nestjs/common';
import { DeliveryZipPrefixController } from './delivery-zip-prefix.controller';
import { DeliveryZipPrefixService } from './delivery-zip-prefix.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryZipPrefix } from './entities/delivery-zip-prefix.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryZipPrefix])],
  controllers: [DeliveryZipPrefixController],
  providers: [DeliveryZipPrefixService],
})
export class DeliveryZipPrefixModule {}
