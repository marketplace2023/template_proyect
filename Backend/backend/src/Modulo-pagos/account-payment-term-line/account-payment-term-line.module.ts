import { Module } from '@nestjs/common';
import { AccountPaymentTermLineController } from './account-payment-term-line.controller';
import { AccountPaymentTermLineService } from './account-payment-term-line.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountPaymentTermLine } from './entities/account-payment-term-line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountPaymentTermLine])],
  controllers: [AccountPaymentTermLineController],
  providers: [AccountPaymentTermLineService],
})
export class AccountPaymentTermLineModule {}
