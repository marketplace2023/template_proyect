import { Module } from '@nestjs/common';
import { SellerTaxService } from './seller_tax.service';
import { SellerTaxController } from './seller_tax.controller';

@Module({
  controllers: [SellerTaxController],
  providers: [SellerTaxService],
})
export class SellerTaxModule {}
