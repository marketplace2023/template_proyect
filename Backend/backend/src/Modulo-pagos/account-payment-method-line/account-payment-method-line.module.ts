import { Module } from '@nestjs/common';
import { AccountPaymentMethodLineController } from './account-payment-method-line.controller';
import { AccountPaymentMethodLineService } from './account-payment-method-line.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountPaymentMethodLine } from './entities/account-payment-method-line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountPaymentMethodLine])],
  controllers: [AccountPaymentMethodLineController],
  providers: [AccountPaymentMethodLineService],
})
export class AccountPaymentMethodLineModule {}
