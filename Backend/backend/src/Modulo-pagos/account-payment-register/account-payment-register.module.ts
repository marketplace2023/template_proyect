import { Module } from '@nestjs/common';
import { AccountPaymentRegisterController } from './account-payment-register.controller';
import { AccountPaymentRegisterService } from './account-payment-register.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountPaymentRegister } from './entities/account-payment-register.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountPaymentRegister])],
  controllers: [AccountPaymentRegisterController],
  providers: [AccountPaymentRegisterService],
})
export class AccountPaymentRegisterModule {}
