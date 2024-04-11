import { Module } from '@nestjs/common';
import { AccountInvoiceController } from './account-invoice.controller';
import { AccountInvoiceService } from './account-invoice.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountInvoice } from './entities/account-invoice.entity';
import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountInvoice, ProductsTemplate])],
  controllers: [AccountInvoiceController],
  providers: [AccountInvoiceService],
})
export class AccountInvoiceModule {}
