import { Module } from '@nestjs/common';
import { AccountInvoiceLineController } from './account-invoice-line.controller';
import { AccountInvoiceLineService } from './account-invoice-line.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountInvoiceLine } from './entities/account-invoice-line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountInvoiceLine])],
  controllers: [AccountInvoiceLineController],
  providers: [AccountInvoiceLineService],
})
export class AccountInvoiceLineModule {}
