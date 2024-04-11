import { Module } from '@nestjs/common';
import { PaymentTokenController } from './payment-token.controller';
import { PaymentTokenService } from './payment-token.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentToken } from './entities/payment-token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentToken])],
  controllers: [PaymentTokenController],
  providers: [PaymentTokenService],
})
export class PaymentTokenModule {}
