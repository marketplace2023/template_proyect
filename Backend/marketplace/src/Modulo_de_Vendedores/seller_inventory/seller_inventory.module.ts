import { Module } from '@nestjs/common';
import { SellerInventoryService } from './seller_inventory.service';
import { SellerInventoryController } from './seller_inventory.controller';

@Module({
  controllers: [SellerInventoryController],
  providers: [SellerInventoryService],
})
export class SellerInventoryModule {}
