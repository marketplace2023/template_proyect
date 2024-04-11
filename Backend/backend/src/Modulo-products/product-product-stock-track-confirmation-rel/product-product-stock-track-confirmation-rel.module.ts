import { Module } from '@nestjs/common';
import { ProductProductStockTrackConfirmationRelController } from './product-product-stock-track-confirmation-rel.controller';
import { ProductProductStockTrackConfirmationRelService } from './product-product-stock-track-confirmation-rel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductProductStockTrackConfirmationRel } from './entities/product-product-stock-track-confirmation-rel.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductProductStockTrackConfirmationRel]),
  ],
  controllers: [ProductProductStockTrackConfirmationRelController],
  providers: [ProductProductStockTrackConfirmationRelService],
})
export class ProductProductStockTrackConfirmationRelModule {}
