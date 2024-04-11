import { Module } from '@nestjs/common';
import { StockCarrierController } from './stock-carrier.controller';
import { StockCarrierService } from './stock-carrier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockCarrier } from './entities/stock-carrier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockCarrier])],
  controllers: [StockCarrierController],
  providers: [StockCarrierService],
})
export class StockCarrierModule {}
