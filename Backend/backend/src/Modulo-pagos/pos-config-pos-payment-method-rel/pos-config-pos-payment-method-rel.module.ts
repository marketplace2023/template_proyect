import { Module } from '@nestjs/common';
import { PosConfigPosPaymentMethodRelController } from './pos-config-pos-payment-method-rel.controller';
import { PosConfigPosPaymentMethodRelService } from './pos-config-pos-payment-method-rel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosConfigPosPaymentMethodRel } from './entities/pos-config-pos-payment-method-rel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosConfigPosPaymentMethodRel])],
  controllers: [PosConfigPosPaymentMethodRelController],
  providers: [PosConfigPosPaymentMethodRelService],
})
export class PosConfigPosPaymentMethodRelModule {}
