import { Module } from '@nestjs/common';
import { AccountPaymentMethodService } from './account-payment-method.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountPaymentMethodController } from './account-payment-method.controller';
import { AccountPaymentMethod } from './entities/account-payment-method.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountPaymentMethod])],
  controllers: [AccountPaymentMethodController],
  providers: [AccountPaymentMethodService],
})
export class AccountPaymentMethodModule {}
