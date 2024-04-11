import { Module } from '@nestjs/common';
import { AccountPaymentRegisterMoveLineRelController } from './account-payment-register-move-line-rel.controller';
import { AccountPaymentRegisterMoveLineRelService } from './account-payment-register-move-line-rel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountPaymentRegisterMoveLineRel } from './entities/account-payment-register-move-line-rel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountPaymentRegisterMoveLineRel])],
  controllers: [AccountPaymentRegisterMoveLineRelController],
  providers: [AccountPaymentRegisterMoveLineRelService],
})
export class AccountPaymentRegisterMoveLineRelModule {}
