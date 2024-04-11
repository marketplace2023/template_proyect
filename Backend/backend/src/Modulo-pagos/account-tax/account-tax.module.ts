import { Module } from '@nestjs/common';
import { AccountTaxController } from './account-tax.controller';
import { AccountTaxService } from './account-tax.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountTax } from './entities/account-tax.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountTax])],
  controllers: [AccountTaxController],
  providers: [AccountTaxService],
})
export class AccountTaxModule {}
