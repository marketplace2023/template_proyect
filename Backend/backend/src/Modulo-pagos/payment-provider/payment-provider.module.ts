import { Module } from '@nestjs/common';
import { PaymentProviderController } from './payment-provider.controller';
import { PaymentProviderService } from './payment-provider.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentProvider } from './entities/payment-provider.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentProvider])],
  controllers: [PaymentProviderController],
  providers: [PaymentProviderService],
})
export class PaymentProviderModule {}
