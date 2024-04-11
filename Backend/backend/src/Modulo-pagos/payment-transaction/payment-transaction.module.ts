import { Module } from '@nestjs/common';
import { PaymentTransactionController } from './payment-transaction.controller';
import { PaymentTransactionService } from './payment-transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentTransaction } from './entities/payment-transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentTransaction])],
  controllers: [PaymentTransactionController],
  providers: [PaymentTransactionService],
})
export class PaymentTransactionModule {}
