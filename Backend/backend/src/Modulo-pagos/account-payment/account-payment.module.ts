import { Module } from '@nestjs/common';
import { AccountPaymentController } from './account-payment.controller';
import { AccountPaymentService } from './account-payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountPayment } from './entities/account-payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountPayment])],
  controllers: [AccountPaymentController],
  providers: [AccountPaymentService],
})
export class AccountPaymentModule {}
