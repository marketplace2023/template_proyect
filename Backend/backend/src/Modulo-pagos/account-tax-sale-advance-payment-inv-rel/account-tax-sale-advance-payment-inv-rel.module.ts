import { Module } from '@nestjs/common';
import { AccountTaxSaleAdvancePaymentInvRelController } from './account-tax-sale-advance-payment-inv-rel.controller';
import { AccountTaxSaleAdvancePaymentInvRelService } from './account-tax-sale-advance-payment-inv-rel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountTaxSaleAdvancePaymentInvRel } from './entities/account-tax-sale-advance-payment-inv-rel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountTaxSaleAdvancePaymentInvRel])],
  controllers: [AccountTaxSaleAdvancePaymentInvRelController],
  providers: [AccountTaxSaleAdvancePaymentInvRelService],
})
export class AccountTaxSaleAdvancePaymentInvRelModule {}
