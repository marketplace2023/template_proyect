import { Module } from '@nestjs/common';
import { PaymentTermController } from './payment-term.controller';
import { PaymentTermService } from './payment-term.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentTerm } from './entities/payment-term.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentTerm])],
  controllers: [PaymentTermController],
  providers: [PaymentTermService],
})
export class PaymentTermModule {}
