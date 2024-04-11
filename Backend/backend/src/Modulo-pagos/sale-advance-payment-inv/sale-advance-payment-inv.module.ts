import { Module } from '@nestjs/common';
import { SaleAdvancePaymentInvController } from './sale-advance-payment-inv.controller';
import { SaleAdvancePaymentInvService } from './sale-advance-payment-inv.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleAdvancePaymentInv } from './entities/sale-advance-payment-inv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleAdvancePaymentInv])],
  controllers: [SaleAdvancePaymentInvController],
  providers: [SaleAdvancePaymentInvService],
})
export class SaleAdvancePaymentInvModule {}
