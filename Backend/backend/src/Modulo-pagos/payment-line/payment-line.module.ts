import { Module } from '@nestjs/common';
import { PaymentLineController } from './payment-line.controller';
import { PaymentLineService } from './payment-line.service';
import { PaymentLine } from './entities/payment-line.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentLine])],
  controllers: [PaymentLineController],
  providers: [PaymentLineService],
})
export class PaymentLineModule {}
