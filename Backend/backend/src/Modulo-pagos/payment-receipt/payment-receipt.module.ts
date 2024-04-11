import { Module } from '@nestjs/common';
import { PaymentReceiptController } from './payment-receipt.controller';
import { PaymentReceiptService } from './payment-receipt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentReceipt } from './entities/payment-receipt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentReceipt])],
  controllers: [PaymentReceiptController],
  providers: [PaymentReceiptService],
})
export class PaymentReceiptModule {}
